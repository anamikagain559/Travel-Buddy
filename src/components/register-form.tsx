Argument of type '(_state: any, formData: FormData) => Promise<{ success: boolean; errors: { field: PropertyKey; message: string; }[] | undefined; message: string; } | { success: boolean; message: any; errors?: undefined; }>' is not assignable to parameter of type '(state: any) => any'.
  Target signature provides too few arguments. Expected 2 or more, but got 1.ts(2345)
(alias) const registerUser: (_state: any, formData: FormData) => Promise<{
    success: boolean;
    errors: {
        field: PropertyKey;
        message: string;
    }[] | undefined;
    message: string;