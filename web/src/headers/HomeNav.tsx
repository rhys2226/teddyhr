import React from 'react';

export default function HomeNav() {
    return (
        <div>
            <nav className='topnav navbar navbar-light  bg-dark '>
                <button
                    type='button'
                    className='navbar-toggler text-muted mt-2 p-0 mr-3'
                    onClick={( e ) => {
                        e.preventDefault();
                        const body = $( document.body );

                        if ( body.hasClass( 'collapsed' ) ) {
                            body.removeClass( 'collapsed' );
                        } else {
                            body.addClass( 'collapsed' );
                        }
                    }}>
                    <i className='fe fe-menu navbar-toggler-icon'></i>
                </button>
                <form className='form-inline mr-auto searchform text-muted'>
                    <input
                        className='form-control mr-sm-2 bg-transparent border-0 pl-4 text-muted'
                        type='search'
                        placeholder='Type something...'
                        aria-label='Search'
                    />
                </form>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a
                            className='nav-link text-muted my-2'
                            href='#'
                            id='modeSwitcher'
                            data-mode='light'
                            onClick={( e ) => {
                                e.preventDefault();
                                const switcher = $( '#modeSwitcher' );
                                const mode = switcher.attr( 'data-mode' );

                                const light = $( '#lightTheme' );
                                const dark = $( '#darkTheme' );
                                if ( mode === 'light' ) {
                                    light.attr( 'disabled', 'true' );
                                    dark.removeAttr( 'disabled' );
                                    switcher.attr( 'data-mode', 'dark' );
                                } else {
                                    dark.attr( 'disabled', 'true' );
                                    light.removeAttr( 'disabled' );
                                    switcher.attr( 'data-mode', 'light' );
                                }
                            }}>
                            <i className='fe fe-sun fe-16'></i>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-muted my-2' href='./#' data-toggle='modal' data-target='.modal-shortcut'>
                            <span className='fe fe-download-cloud fe-16'></span>
                        </a>
                    </li>
                    <li className='nav-item nav-notif'>
                        <a className='nav-link text-muted my-2' href='./#' data-toggle='modal' data-target='.modal-notif'>
                            <span className='fe fe-bell fe-16'></span>
                            <span className='dot dot-md bg-success'></span>
                        </a>
                    </li>
                    <li className='nav-item dropdown'>
                        <a
                            className='nav-link dropdown-toggle text-muted pr-0'
                            href='#'
                            id='navbarDropdownMenuLink'
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            <span className='avatar avatar-sm mt-2'>
                                <img src='http://localhost:3000/assets/avatars/face-1.jpg' alt='...' className='avatar-img rounded-circle' />
                            </span>
                        </a>
                        <div className='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdownMenuLink'>
                            <a className='dropdown-item' href='#'>
                                Profile
							</a>
                            <a className='dropdown-item' href='#'>
                                Settings
							</a>
                            <a className='dropdown-item' href='#'>
                                Log-Out
							</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
