export type SetupTimeOut = {
    controller: AbortController,
    timeOut: number
}
export const setupTimeout = ({ controller, timeOut }: SetupTimeOut) => {
    return setTimeout(() => controller.abort(), timeOut);
}
