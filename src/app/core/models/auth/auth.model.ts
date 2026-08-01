// login-request.model.ts

export interface LoginRequest {
  employeeCode: string;
  password: string;
}

export interface LogoutResponse {
  success: boolean;
  message: string;
}