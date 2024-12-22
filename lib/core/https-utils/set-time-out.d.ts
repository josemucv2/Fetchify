export type SetupTimeOut = {
    controller: AbortController;
    timeOut: number;
};
export declare const setupTimeout: ({ controller, timeOut }: SetupTimeOut) => NodeJS.Timeout;
