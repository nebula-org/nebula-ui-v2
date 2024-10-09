import { LoginModalOptions } from "@privy-io/react-auth";

export type LoginButtonProps = {
    ready: boolean;
    authenticated: boolean;
    login: (options?: LoginModalOptions | React.MouseEvent<any, any>) => void
}