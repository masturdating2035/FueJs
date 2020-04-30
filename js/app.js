document.getElementById('root').append(
    FueJs.createElement('div', {
        className: 'container'
    }, [
        FueJs.createElement('div', {
            className: 'left-side'
        }, [
            FueJs.createElement('h4', {
                style: ''
            }, "Multi Anti-Virus & Cybersecurity"),
            FueJs.createElement('img', {
                src: "./img/radar-angle.png",
                className: 'radar'
            }),
            FueJs.createElement('div', {
                className: 'left-side-logo'
            }, [
                FueJs.createElement('img', {
                    src: './img/logo.png'
                }),
                FueJs.createElement('span', {
                    className: 'radar'
                }),
                FueJs.createElement('span', {
                    className: 'pulse'
                }),
                FueJs.createElement('span', {
                    className: 'pulse'
                }),
                FueJs.createElement('span', {
                    className: 'pulse'
                }),
                FueJs.createElement('span', {
                    className: 'pulse'
                }),
                FueJs.createElement('span', {
                    className: 'pulse'
                }),
                FueJs.createElement('span', {
                    className: 'pulse'
                })
            ])
        ]),




        FueJs.createElement('div', {
            className: 'right-side'
        },
            FueJs.createElement('form', {
                className: 'form-login'
            }, [
                FueJs.createElement('div', {
                    className: 'enter'
                },
                    FueJs.createElement('h5', {
                        style: ''
                    }, "ورود")
                ),
                FueJs.createElement('div', {
                    className: 'form-login-entry'
                }, [
                    FueJs.createElement('div', {
                        className: 'form-login-entry-title'
                    }, [
                        FueJs.createElement('p', {
                            style: ''
                        }, 'ورود به حساب کاربری'),
                        FueJs.createElement('p', {
                            style: ''
                        }, 'جهت ورود به برنامه نام کاربری و رمز عبور خود را وارد نمایید')
                    ]

                    ),
                    FueJs.createElement('label', {
                        style: ''
                    }, [
                        FueJs.createElement('input', {
                            placeholder: 'نام کاربری'
                        }),
                        FueJs.createElement('i', {
                            className: 'fas fa-user'
                        })]
                    ),
                    FueJs.createElement('label', {
                        style: ''
                    }, [
                        FueJs.createElement('input', {
                            placeholder: 'رمز عبور'
                        }),
                        FueJs.createElement('i', {
                            className: 'fas fa-lock'
                        })]

                    ),
                    FueJs.createElement('div', {
                        className: 'form-login-entry-security'
                    }, [
                        FueJs.createElement('div', {
                            className: 'form-login-entry-security-input'
                        }, [
                            FueJs.createElement('input', {
                                placeholder: 'کد امنیتی'
                            }),
                            FueJs.createElement('i', {
                                className: 'fas fa-th'
                            })]
                        ),
                        FueJs.createElement('div', {
                            className: 'form-login-entry-security-random'
                        }, [
                            FueJs.createElement('img', {
                                src: './img/random.jpg'
                            }),
                            FueJs.createElement('i', {
                                className: 'fas fa-sync'
                            })]

                        )
                    ]

                    ),
                    FueJs.createElement('button', {
                        className: 'btn'
                    }, 'ورود'),
                    FueJs.createElement('div', {
                        className: 'form-login-remember'
                    }, [
                        FueJs.createElement('input', {
                            type: 'checkbox'
                        }),
                        FueJs.createElement('span', {
                            style: ''
                        }, 'مرا به خاطر بسپار')]
                    )
                ])
            ])
        )

    ])
)



