/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * WordPress is open source software you can use to create a beautiful website, blog, or app.
 */
export interface WP {
  Comment?: WP_Comment;
  Error?: WP_Error;
  Error_With_Error?: WP_Error_With_Error;
  Error_Without_Error?: WP_Error_Without_Error;
  Post?: WP_Post;
  User?: WP_User;
}
/**
 * Core class used to organize comments as instantiated objects with defined members.
 */
export interface WP_Comment {
  /**
   * Comment ID.
   *
   * A numeric string, for compatibility reasons.
   */
  comment_ID: string;
  /**
   * ID of the post the comment is associated with.
   *
   * A numeric string, for compatibility reasons.
   */
  comment_post_ID: string;
  /**
   * Comment author name.
   */
  comment_author: string;
  /**
   * Comment author email address.
   */
  comment_author_email: string;
  /**
   * Comment author URL.
   */
  comment_author_url: string;
  /**
   * Comment author IP address (IPv4 format).
   */
  comment_author_IP: string;
  /**
   * Comment date in YYYY-MM-DD HH:MM:SS format.
   */
  comment_date: string;
  /**
   * Comment GMT date in YYYY-MM-DD HH::MM:SS format.
   */
  comment_date_gmt: string;
  /**
   * Comment content.
   */
  comment_content: string;
  /**
   * Comment karma count.
   *
   * A numeric string, for compatibility reasons.
   */
  comment_karma: string;
  /**
   * Comment approval status.
   */
  comment_approved: string;
  /**
   * Comment author HTTP user agent.
   */
  comment_agent: string;
  /**
   * Comment type.
   */
  comment_type: string;
  /**
   * Parent comment ID.
   *
   * A numeric string, for compatibility reasons.
   */
  comment_parent: string;
  /**
   * Comment author ID.
   *
   * A numeric string, for compatibility reasons.
   */
  user_id: string;
}
/**
 * WordPress Error class.
 *
 * Container for checking for WordPress errors and error messages. Many
 * core WordPress functions pass this class in the event of an error.
 */
export interface WP_Error {
  /**
   * Stores the list of errors.
   */
  errors: [] | WP_Error_Messages;
  /**
   * Stores the list of data for error codes.
   */
  error_data: [] | WP_Error_Data;
}
/**
 * The messages for the errors contained within the error object.
 *
 * Each error is represented by a property keyed by the error code, and containing an array of message strings for that
 * code. Any given error code usually contains only one message, but can contain more.
 */
export interface WP_Error_Messages {
  [k: string]: string[];
}
/**
 * The data for the errors contained within the error object.
 *
 * Each error is represented by a property keyed by the error code, and containing error data for that code. Any given
 * error code can contain only one piece of error data, but the data can be of any type.
 */
export interface WP_Error_Data {
  [k: string]: any;
}
/**
 * WordPress Error class.
 *
 * Represents a WP_Error object that contains at least one error.
 */
export interface WP_Error_With_Error {
  /**
   * Stores the list of errors.
   */
  errors: WP_Error_Messages;
  /**
   * Stores the list of data for error codes.
   */
  error_data: WP_Error_Data;
}
/**
 * Empty WordPress Error class.
 *
 * Represents a WP_Error object that contains no errors.
 */
export interface WP_Error_Without_Error {
  /**
   * Stores the list of errors.
   */
  errors: [];
  /**
   * Stores the list of data for error codes.
   */
  error_data: [];
}
/**
 * Core class used to implement the WP_Post object.
 */
export interface WP_Post {
  /**
   * Post ID.
   */
  ID: number;
  /**
   * ID of post author.
   *
   * A numeric string, for compatibility reasons.
   */
  post_author: string;
  /**
   * The post's local publication time.
   */
  post_date: string;
  /**
   * The post's GMT publication time.
   */
  post_date_gmt: string;
  /**
   * The post's content.
   */
  post_content: string;
  /**
   * The post's title.
   */
  post_title: string;
  /**
   * The post's excerpt.
   */
  post_excerpt: string;
  /**
   * The post's status.
   */
  post_status: WP_Post_Status_Name | string;
  /**
   * Whether comments are allowed.
   */
  comment_status: string;
  /**
   * Whether pings are allowed.
   */
  ping_status: string;
  /**
   * The post's password in plain text.
   */
  post_password: "" | string;
  /**
   * The post's slug.
   */
  post_name: string;
  /**
   * URLs queued to be pinged.
   */
  to_ping: "" | string;
  /**
   * URLs that have been pinged.
   */
  pinged: "" | string;
  /**
   * The post's local modified time.
   */
  post_modified: string;
  /**
   * The post's GMT modified time.
   */
  post_modified_gmt: string;
  /**
   * A utility DB field for post content.
   */
  post_content_filtered: "" | string;
  /**
   * ID of a post's parent post.
   */
  post_parent: number;
  /**
   * The unique identifier for a post, not necessarily a URL, used as the feed GUID.
   */
  guid: string;
  /**
   * A field used for ordering posts.
   */
  menu_order: number;
  /**
   * The post's type, like post or page.
   */
  post_type: WP_Post_Type_Name | string;
  /**
   * An attachment's mime type.
   */
  post_mime_type: string;
  /**
   * Cached comment count.
   *
   * A numeric string, for compatibility reasons.
   */
  comment_count: string;
  /**
   * Stores the post object's sanitization level.
   *
   * Does not correspond to a DB field.
   */
  filter: "raw" | "edit" | "db" | "display";
}
/**
 * Core class used to implement the WP_User object.
 */
export interface WP_User {
  /**
   * The user's ID.
   */
  ID: number;
  /**
   * All capabilities the user has, including individual and role based.
   */
  allcaps: WP_User_Caps;
  /**
   * User metadata option name.
   */
  cap_key: string;
  /**
   * The individual capabilities the user has been given.
   *
   * See the allcaps property for a complete list of caps that the user has.
   */
  caps: WP_User_Caps;
  /**
   * User data container.
   */
  data: WP_User_Data;
  /**
   * The filter context applied to user data fields.
   */
  filter: "attribute" | "db" | "display" | "edit" | "js" | "raw";
  /**
   * The roles the user is part of.
   */
  roles: (WP_User_Role_Name | string)[];
}
/**
 * A dictionary of user capabilities.
 *
 * Property names represent a capability name and boolean values represent whether the user has that capability.
 */
export interface WP_User_Caps {
  [k: string]: boolean;
}
/**
 * User data container.
 */
export interface WP_User_Data {
  /**
   * The user's ID.
   *
   * A numeric string, for compatibility reasons.
   */
  ID?: string;
  /**
   * The user's deletion status. Only used on Multisite.
   */
  deleted?: "0" | "1";
  /**
   * The user's full display name.
   */
  display_name?: string;
  /**
   * The user's spam status. Only used on Multisite.
   */
  spam?: "0" | "1";
  /**
   * The user's activation key. Be careful not to expose this in your application.
   */
  user_activation_key?: string;
  /**
   * The user's email address.
   */
  user_email?: string;
  /**
   * The user's login name.
   */
  user_login?: string;
  /**
   * The user's name as used in their author archive URL slug.
   */
  user_nicename?: string;
  /**
   * The one-way hash of the user's password.
   */
  user_pass?: string;
  /**
   * The user's registration date.
   */
  user_registered?: string;
  /**
   * The user's status. This field does not appear to be used by WordPress core.
   */
  user_status?: "0";
  /**
   * The user's URL.
   */
  user_url?: string;
  [k: string]: unknown;
}

export enum WP_Post_Status_Name {
  publish = "publish",
  draft = "draft",
  auto_draft = "auto-draft",
  inherit = "inherit",
  pending = "pending",
  future = "future",
  trash = "trash",
  private = "private",
}
export enum WP_Post_Type_Name {
  post = "post",
  page = "page",
  attachment = "attachment",
  revision = "revision",
  nav_menu_item = "nav_menu_item",
  custom_css = "custom_css",
  customize_changeset = "customize_changeset",
  oembed_cache = "oembed_cache",
  user_request = "user_request",
  wp_block = "wp_block",
}
export enum WP_User_Role_Name {
  administrator = "administrator",
  editor = "editor",
  author = "author",
  contributor = "contributor",
  subscriber = "subscriber",
}
