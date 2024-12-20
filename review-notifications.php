<?php
 /**
 * Plugin Name: Review Notifications
 * Description: Increase customer engagement by notifying users about recent reviews with our customizable review notification plugin.
 * Version: 1.0.0
 * Author: Mostafijur
 * Author URI: https://github.com/mostafijur-rahman299
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: review-notifications
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'PHRNB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'PHRNB_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'PHRNB_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'PHRNB_Review_Notifications' ) ){
	class PHRNB_Review_Notifications{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
	}
	new PHRNB_Review_Notifications();
}