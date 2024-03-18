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
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'streamit' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'zV|NLLH7)mZ}YTlul#e` Y<]Wq,{GtVX~=2n#]Hok-*&]m <A@!o/B`3zOvJad`;' );
define( 'SECURE_AUTH_KEY',  'j[.@synR//DY*{kD6/W;Bv+Ww0uF?dE-,d!$!9Zgp|[94Lx:sD7.|6i*^Dj[~f+l' );
define( 'LOGGED_IN_KEY',    'vGZG#*(YFK}pc3E/LT[i$4(~Q^p}LZAFQU$==!sA]3wxj$c6zS1,q=?RpAqC!vf6' );
define( 'NONCE_KEY',        'D_LXfi-AqVaVUXV7EMqjVER&DLoZQ!/1TUJqQe/>|^c0a8@m|hbapW,M<90{[0A0' );
define( 'AUTH_SALT',        '6062 BLD] h}A[,lGB[}*gS7#R*qdr`e4BUgRLEDzIIh,R,Q+xCw`M>;JO[(= *4' );
define( 'SECURE_AUTH_SALT', 'pWC9+.u/m,1iySX8E#t>!`=*{D-x]06{EE<|0Q->M8)m3T58A,mXV|1%>CO{rgwj' );
define( 'LOGGED_IN_SALT',   '0w8h(WcM~ISVzqxDtp=+c>z]NF1lig7^Hzhu,coR&ZNKel*:AjSy8[}I#W5v$|,t' );
define( 'NONCE_SALT',       'B]+F*jNx8013l>vD_z%vM@h1hHzn-O3%qI3;xh_QP#J)1l,M)q.Kb~ZNAb;ILx:9' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'stream_';

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
