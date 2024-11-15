'use client';

import { Button } from '@/shared/components';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { signIn } from 'next-auth/react';
import { FC, useState } from 'react';
import { LoginForm } from '@/shared/components/shared/modals/auth-modal/forms/login-form';
import { RegisterForm } from '@/shared/components/shared/modals/auth-modal/forms/register-form';

interface Props {
    open: boolean;
    onClose: () => void;
}

export const AuthModal: FC<Props> = ({ open, onClose }) => {
    const [type, setType] = useState<'login' | 'register'>('login');

    const onSwitchType = () => {
        setType(type === 'login' ? 'register' : 'login');
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="w-[450px] bg-white p-10">
                {type === 'login' ? (
                    <LoginForm onClose={handleClose} />
                ) : (
                    <RegisterForm onClose={handleClose} />
                )}

                <hr />
                <div className="flex gap-2">
                    <Button
                        variant="secondary"
                        onClick={() =>
                            signIn('github', {
                                callbackUrl: '/',
                                redirect: true,
                            })
                        }
                        type="button"
                        className="h-12 flex-1 gap-2 p-2"
                    >
                        <img
                            className="size-6"
                            src="https://github.githubassets.com/favicons/favicon.svg"
                        />
                        GitHub
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={() =>
                            signIn('google', {
                                callbackUrl: '/',
                                redirect: true,
                            })
                        }
                        type="button"
                        className="h-12 flex-1 gap-2 p-2"
                    >
                        <img
                            className="size-6"
                            src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                        />
                        Google
                    </Button>
                </div>

                <Button
                    variant="outline"
                    onClick={onSwitchType}
                    type="submit"
                    className="h-12"
                >
                    {type !== 'login' ? 'Войти' : 'Регистрация'}
                </Button>
            </DialogContent>
        </Dialog>
    );
};
