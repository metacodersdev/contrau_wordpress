<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/support/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'contrau_wordpress' );


/** Database username */

define( 'DB_USER', 'bn_contrau' );


/** Database password */

define( 'DB_PASSWORD', '' );


/** Database hostname */

define( 'DB_HOST', 'mariadb:3306' );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         ';L?(s4EV:CY8B.ndL{[BNWre3IPo*0]&N/`SrB-]Sfu)z2-=D[-G <z.s G38V(_' );

define( 'SECURE_AUTH_KEY',  'ssw_Jh}|J=;>kwKJRP9_py)]nM`!.AQr/bT|EJ!DSc=T{f8-R:dl&]eW(TDscG~n' );

define( 'LOGGED_IN_KEY',    'p}96+^1u& H|cjm%M|EAn9OU-&Bo,b#i5E|H6F2[QjO?T{S.XbR>g{&|a1,V8p{4' );

define( 'NONCE_KEY',        'Gm5QCyL2Vr@~Ti1mV_fj2g7Z._j017bF;yV:p5w76R[2Q#N<i>K0R8g$J*`]Z(!-' );

define( 'AUTH_SALT',        '[]Pe{z^y+ &}Rf5,UhK-L;+SSk[GL{S0FMY@+v{k[)l[Q]py1P3p-J>VRVJO^7Sm' );

define( 'SECURE_AUTH_SALT', '/Tvorlt1@.(oQB_m&/-W2JC9of?OIF{.~=JIw1AI^#/b(sMabyF%Af5Y1F4)LnT5' );

define( 'LOGGED_IN_SALT',   'U3Yg?vu?$JEjV.T6_^C4%hR=qQZjF1`vE  Est(jp-%2UA8L6:_S-L?.|Vk>$h 3' );

define( 'NONCE_SALT',       '*QoB:K<B(^I$[`4G}4<|)!:nWs N(=<#BrMf:vCBy4mqa}lq~D`?QMH$e-Ws]ff(' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/support/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */




define( 'FS_METHOD', 'direct' );
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
 */
if ( defined( 'WP_CLI' ) ) {
	$_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_AUTO_UPDATE_CORE', false );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

/**
 * Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
 * More info at: https://docs.bitnami.com/general/apps/wordpress/troubleshooting/xmlrpc-and-pingback/
 */
if ( !defined( 'WP_CLI' ) ) {
	// remove x-pingback HTTP header
	add_filter("wp_headers", function($headers) {
		unset($headers["X-Pingback"]);
		return $headers;
	});
	// disable pingbacks
	add_filter( "xmlrpc_methods", function( $methods ) {
		unset( $methods["pingback.ping"] );
		return $methods;
	});
}
