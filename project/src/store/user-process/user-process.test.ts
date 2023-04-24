import { AuthorizationStatus } from '../../const';
import { makeFackeUserData } from '../../mocks/mocks';
import { UserProcess } from '../../types/state';
import { checkAuthAction, logOutAction, loginAction } from '../api-actions';
import { userProcess } from './user-process.slice';

const fakeUserData = makeFackeUserData();

describe('Reducer: user', () => {
  let initialState: UserProcess;

  beforeEach(() => {
    initialState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({ authorizationStatus: AuthorizationStatus.Unknown, userData: null });
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(initialState, { type: checkAuthAction.fulfilled.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Auth });
    });
    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(initialState, { type: checkAuthAction.rejected.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, userData: null });
    });
  });

  describe('checkLoginAction test', () => {
    it('should update authorizationStatus to "AUTH" if loginAction fulfilled', () => {
      expect(userProcess.reducer(initialState, { type: loginAction.fulfilled.type, payload: fakeUserData }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Auth, userData: fakeUserData });
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(initialState, { type: loginAction.rejected.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, userData: null });
    });
  });

  describe('checkLogoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(initialState, { type: logOutAction.fulfilled.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, userData: null });
    });
  });
});
