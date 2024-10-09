import { LoginButtonProps } from '../../types/privy';

export function LoginButton(props: LoginButtonProps) {
    const { ready, authenticated, login } = props;
    // Disable login when Privy is not ready or the user is already authenticated
    const disableLogin = !ready || (ready && authenticated);

    return (
        <button disabled={disableLogin} onClick={login}>
            Log in
        </button>
    );
}