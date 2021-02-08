/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Timestamp in MySQL DATETIME format (`YYYY-MM-DD hh:mm:ss`).
 */
export type WP_Date_Time = string;
/**
 * The name of an individual primitive capability or meta capability.
 */
export type WP_User_Cap_Name = string;
/**
 * Timestamp in IETF RFC 3339 date-time format minus the timezone identifier (`YYYY-MM-DDThh:mm:ss`).
 */
export type WP_REST_API_Date_Time = string;

/**
 * WordPress is open source software you can use to create a beautiful website, blog, or app.
 */
export interface WP {
  Comment?: WP_Comment;
  Error?: WP_Error;
  Error_With_Error?: WP_Error_With_Error;
  Error_Without_Error?: WP_Error_Without_Error;
  Post?: WP_Post;
  Post_Type?: WP_Post_Type;
  Site?: WP_Site;
  Term?: WP_Term;
  User?: WP_User;
  REST_API?: {
    Comment?: WP_REST_API_Comment;
    Post?: WP_REST_API_Post;
    Media?: WP_REST_API_Media;
    Term?: WP_REST_API_Term;
    User?: WP_REST_API_User;
    Error?: WP_REST_API_Error;
  };
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
  comment_date: WP_Date_Time;
  /**
   * Comment GMT date in YYYY-MM-DD HH::MM:SS format.
   */
  comment_date_gmt: WP_Date_Time;
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
  comment_approved: "0" | "1" | "spam" | "trash";
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
  post_date: WP_Date_Time;
  /**
   * The post's GMT publication time.
   */
  post_date_gmt: WP_Date_Time;
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
  post_modified: WP_Date_Time;
  /**
   * The post's GMT modified time.
   */
  post_modified_gmt: WP_Date_Time;
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
   */
  filter: WP_Object_Filter_Context;
}
/**
 * Core class used for interacting with post types.
 */
export interface WP_Post_Type {
  /**
   * Post type key.
   */
  name: WP_Post_Type_Name | string;
  /**
   * Name of the post type shown in the menu. Usually plural.
   */
  label: string;
  labels: WP_Post_Type_Labels;
  /**
   * A short descriptive summary of what the post type is.
   */
  description: string;
  /**
   * Whether a post type is intended for use publicly either via the admin interface or by front-end users.
   */
  public: boolean;
  /**
   * Whether the post type is hierarchical.
   */
  hierarchical: boolean;
  /**
   * Whether to exclude posts with this post type from front end search results.
   */
  exclude_from_search: boolean;
  /**
   * Whether queries can be performed on the front end for the post type as part of `parse_request()`.
   */
  publicly_queryable: boolean;
  /**
   * Whether to generate and allow a UI for managing this post type in the admin.
   */
  show_ui: boolean;
  /**
   * Where to show the post type in the admin menu.
   */
  show_in_menu: boolean | string;
  /**
   * Makes this post type available for selection in navigation menus.
   */
  show_in_nav_menus: boolean;
  /**
   * Makes this post type available via the admin bar.
   */
  show_in_admin_bar: boolean;
  /**
   * The position in the menu order the post type should appear.
   */
  menu_position: number;
  /**
   * The URL or reference to the icon to be used for this menu. Can include a URL, a base64-encoded SVG using a data URI, the name of a Dashicons helper class, or 'none'.
   */
  menu_icon: string;
  /**
   * The string to use to build the read, edit, and delete capabilities.
   */
  capability_type: string;
  /**
   * Whether to use the internal default meta capability handling.
   */
  map_meta_cap: boolean;
  /**
   * Provide a callback function that sets up the meta boxes for the edit form.
   */
  register_meta_box_cb: {
    [k: string]: unknown;
  };
  /**
   * An array of taxonomy identifiers that will be registered for the post type.
   */
  taxonomies: (WP_Taxonomy_Name | string)[];
  /**
   * Whether there should be post type archives, or if a string, the archive slug to use.
   */
  has_archive: boolean | string;
  /**
   * Sets the query_var key for this post type.
   */
  query_var: string | boolean;
  /**
   * Whether to allow this post type to be exported.
   */
  can_export: boolean;
  /**
   * Whether to delete posts of this type when deleting a user.
   */
  delete_with_user: boolean;
  /**
   * Array of blocks to use as the default initial state for an editor session.
   */
  template: unknown[];
  /**
   * Whether the block template should be locked if $template is set.
   */
  template_lock: false | "all" | "insert";
  /**
   * Whether this post type is a native or 'built-in' post_type.
   */
  _builtin: boolean;
  /**
   * URL segment to use for edit link of this post type.
   */
  _edit_link: string;
  /**
   * Post type capabilities.
   */
  cap: WP_Post_Type_Caps;
  /**
   * Triggers the handling of rewrites for this post type.
   */
  rewrite: boolean | WP_Post_Type_Rewrite;
  /**
   * The features supported by the post type.
   */
  supports?: {
    [k: string]: unknown;
  };
  /**
   * Whether this post type should appear in the REST API.
   */
  show_in_rest: boolean;
  /**
   * The base path for this post type's REST API endpoints.
   */
  rest_base: string | boolean;
  /**
   * The controller for this post type's REST API endpoints.
   */
  rest_controller_class: string;
  /**
   * The controller instance for this post type's REST API endpoints.
   */
  rest_controller: {
    [k: string]: unknown;
  };
}
/**
 * Labels object for this post type.
 */
export interface WP_Post_Type_Labels {
  name: string;
  singular_name: string;
  add_new: string;
  add_new_item: string;
  edit_item: string;
  new_item: string;
  view_item: string;
  view_items: string;
  search_items: string;
  not_found: string;
  not_found_in_trash: string;
  parent_item_colon: string;
  all_items: string;
  archives: string;
  attributes: string;
  insert_into_item: string;
  uploaded_to_this_item: string;
  featured_image: string;
  set_featured_image: string;
  remove_featured_image: string;
  use_featured_image: string;
  filter_items_list: string;
  items_list_navigation: string;
  items_list: string;
  item_published: string;
  item_published_privately: string;
  item_reverted_to_draft: string;
  item_scheduled: string;
  item_updated: string;
  menu_name: string;
  name_admin_bar: string;
  [k: string]: string;
}
/**
 * Post type capabilities.
 */
export interface WP_Post_Type_Caps {
  edit_post: WP_User_Cap_Name;
  read_post: WP_User_Cap_Name;
  delete_post: WP_User_Cap_Name;
  edit_posts: WP_User_Cap_Name;
  edit_others_posts: WP_User_Cap_Name;
  delete_posts: WP_User_Cap_Name;
  publish_posts: WP_User_Cap_Name;
  read_private_posts: WP_User_Cap_Name;
  read: WP_User_Cap_Name;
  delete_private_posts: WP_User_Cap_Name;
  delete_published_posts: WP_User_Cap_Name;
  delete_others_posts: WP_User_Cap_Name;
  edit_private_posts: WP_User_Cap_Name;
  edit_published_posts: WP_User_Cap_Name;
  create_posts: WP_User_Cap_Name;
}
/**
 * Post type rewrite rule definition.
 */
export interface WP_Post_Type_Rewrite {
  /**
   * Customize the permastruct slug.
   */
  slug?: string;
  /**
   * Whether the permastruct should be prepended with WP_Rewrite::$front.
   */
  with_front?: boolean;
  /**
   * Whether the feed permastruct should be built for this post type.
   */
  feeds?: boolean;
  /**
   * Whether the permastruct should provide for pagination.
   */
  pages?: boolean;
  /**
   * Endpoint mask to assign.
   */
  ep_mask?: number;
  [k: string]: unknown;
}
/**
 * Core class used for interacting with a multisite site.
 */
export interface WP_Site {
  /**
   * Site ID.
   *
   * A numeric string, for compatibility reasons.
   */
  blog_id: string;
  /**
   * Domain of the site.
   */
  domain: string;
  /**
   * Path of the site.
   */
  path: string;
  /**
   * The ID of the site's parent network.
   *
   * Named "site" vs. "network" for legacy reasons. An individual site's "site" is its network.
   *
   * A numeric string, for compatibility reasons.
   */
  site_id: string;
  /**
   * The date on which the site was created or registered.
   */
  registered: WP_Date_Time;
  /**
   * The date and time on which site settings were last updated.
   */
  last_updated: WP_Date_Time;
  /**
   * Whether the site should be treated as public.
   *
   * A numeric string, for compatibility reasons.
   */
  public: "0" | "1";
  /**
   * Whether the site should be treated as archived.
   *
   * A numeric string, for compatibility reasons.
   */
  archived: "0" | "1";
  /**
   * Whether the site should be treated as mature.
   *
   * A numeric string, for compatibility reasons.
   */
  mature: "0" | "1";
  /**
   * Whether the site should be treated as spam.
   *
   * A numeric string, for compatibility reasons.
   */
  spam: "0" | "1";
  /**
   * Whether the site should be treated as deleted.
   *
   * A numeric string, for compatibility reasons.
   */
  deleted: "0" | "1";
  /**
   * The language pack associated with this site.
   *
   * A numeric string, for compatibility reasons.
   */
  lang_id: string;
}
/**
 * Core class used to implement the WP_Term object.
 */
export interface WP_Term {
  /**
   * Term ID.
   */
  term_id: number;
  /**
   * The term's name.
   */
  name: string;
  /**
   * The term's slug.
   */
  slug: string;
  /**
   * The term's term_group.
   */
  term_group: number;
  /**
   * Term Taxonomy ID.
   */
  term_taxonomy_id: number;
  /**
   * The term's taxonomy name.
   */
  taxonomy: WP_Taxonomy_Name | string;
  /**
   * The term's description.
   */
  description: string;
  /**
   * ID of a term's parent term.
   */
  parent: number;
  /**
   * Cached object count for this term.
   */
  count: number;
  /**
   * Stores the term object's sanitization level.
   */
  filter: WP_Object_Filter_Context;
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
  filter: WP_Object_Filter_Context;
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
  user_registered?: WP_Date_Time;
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
/**
 * A comment object in a REST API context.
 */
export interface WP_REST_API_Comment {
  /**
   * Unique identifier for the object.
   */
  id: number;
  /**
   * The ID of the user object, if author was a user.
   */
  author: number;
  /**
   * Email address for the object author. Only present when using the 'edit' context.
   */
  author_email?: string;
  /**
   * IP address for the object author. Only present when using the 'edit' context.
   */
  author_ip?: string;
  /**
   * Display name for the object author.
   */
  author_name: string;
  /**
   * URL for the object author.
   */
  author_url: string;
  /**
   * User agent for the object author. Only present when using the 'edit' context.
   */
  author_user_agent?: string;
  /**
   * The content for the object.
   */
  content: {
    /**
     * Content for the object, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string;
    /**
     * HTML content for the object, transformed for display.
     */
    rendered?: string;
  };
  /**
   * The date the object was published, in the site's timezone.
   */
  date: WP_REST_API_Date_Time;
  /**
   * The date the object was published, as GMT.
   */
  date_gmt: WP_REST_API_Date_Time;
  /**
   * URL to the object.
   */
  link: string;
  /**
   * The ID for the parent of the object.
   */
  parent: number;
  /**
   * The ID of the associated post object.
   */
  post: number;
  /**
   * State of the object.
   */
  status: WP_Comment_Status_Name | string;
  /**
   * Type of Comment for the object.
   */
  type: WP_Comment_Type_Name | string;
  /**
   * Avatar URLs for the object author.
   */
  author_avatar_urls?: {
    /**
     * Avatar URL with image size of 24 pixels.
     */
    "24"?: string;
    /**
     * Avatar URL with image size of 48 pixels.
     */
    "48"?: string;
    /**
     * Avatar URL with image size of 96 pixels.
     */
    "96"?: string;
    /**
     * Avatar URL with image of another size.
     */
    [k: string]: string;
  };
  /**
   * Meta fields.
   */
  meta:
    | []
    | {
        [k: string]: unknown;
      };
  _links: WP_REST_API_Object_Links;
  /**
   * The embedded representation of relations. Only present when the '_embed' query parameter is set.
   */
  _embedded?: {
    /**
     * The author of the comment.
     */
    author: unknown[];
    /**
     * The associated post.
     */
    up?: unknown[];
    [k: string]: unknown[];
  };
  [k: string]: unknown;
}
/**
 * The relations for the object and its properties.
 */
export interface WP_REST_API_Object_Links {
  [k: string]: {
    href: string;
    embeddable?: boolean;
    [k: string]: unknown;
  }[];
}
/**
 * A post object in a REST API context.
 */
export interface WP_REST_API_Post {
  /**
   * The date the object was published, in the site's timezone.
   */
  date: WP_REST_API_Date_Time;
  /**
   * The date the object was published, as GMT.
   */
  date_gmt: WP_REST_API_Date_Time;
  /**
   * The globally unique identifier for the object.
   */
  guid: {
    /**
     * GUID for the object, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string;
    /**
     * GUID for the object, transformed for display.
     */
    rendered: string;
  };
  /**
   * Unique identifier for the object.
   */
  id: number;
  /**
   * URL to the object.
   */
  link: string;
  /**
   * The date the object was last modified, in the site's timezone.
   */
  modified: WP_REST_API_Date_Time;
  /**
   * The date the object was last modified, as GMT.
   */
  modified_gmt: WP_REST_API_Date_Time;
  /**
   * An alphanumeric identifier for the object unique to its type.
   */
  slug: string;
  /**
   * A named status for the object.
   */
  status: WP_Post_Status_Name | string;
  /**
   * Type of Post for the object.
   */
  type: WP_Post_Type_Name | string;
  /**
   * A password to protect access to the content and excerpt. Only present when using the 'edit' context.
   */
  password?: string;
  /**
   * Permalink template for the object. Only present when using the 'edit' context and the post type is public.
   */
  permalink_template?: string;
  /**
   * Slug automatically generated from the object title. Only present when using the 'edit' context and the post type is public.
   */
  generated_slug?: string;
  /**
   * The ID for the parent of the object. Only present for hierarchical post types.
   */
  parent?: number;
  /**
   * The title for the object.
   */
  title: {
    /**
     * Title for the object, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string;
    /**
     * HTML title for the object, transformed for display.
     */
    rendered: string;
  };
  /**
   * The content for the object.
   */
  content: {
    /**
     * Content for the object, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string;
    /**
     * HTML content for the object, transformed for display.
     */
    rendered: string;
    /**
     * Version of the content block format used by the object. Only present when using the 'edit' context.
     */
    block_version?: number;
    /**
     * Whether the content is protected with a password.
     */
    protected: boolean;
  };
  /**
   * The ID for the author of the object.
   */
  author: number;
  /**
   * The excerpt for the object.
   */
  excerpt: {
    /**
     * Excerpt for the object, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string;
    /**
     * HTML excerpt for the object, transformed for display.
     */
    rendered: string;
    /**
     * Whether the excerpt is protected with a password.
     */
    protected: boolean;
  };
  /**
   * The ID of the featured media for the object.
   */
  featured_media?: number;
  /**
   * Whether or not comments are open on the object.
   */
  comment_status: WP_Post_Comment_Status_Name;
  /**
   * Whether or not the object can be pinged.
   */
  ping_status: WP_Post_Comment_Status_Name;
  /**
   * The format for the object.
   */
  format?: WP_Post_Format_Name;
  /**
   * Meta fields.
   */
  meta:
    | []
    | {
        [k: string]: unknown;
      };
  /**
   * Whether or not the object should be treated as sticky. Only present for the 'post' post type.
   */
  sticky?: boolean;
  /**
   * The theme file to use to display the object.
   */
  template?: string;
  /**
   * The terms assigned to the object in the category taxonomy. Only present for post types that support categories.
   */
  categories?: number[];
  /**
   * The terms assigned to the object in the post_tag taxonomy. Only present for post types that support tags.
   */
  tags?: number[];
  _links: WP_REST_API_Object_Links;
  /**
   * The embedded representation of relations. Only present when the '_embed' query parameter is set.
   */
  _embedded?: {
    /**
     * The author of the post.
     */
    author: unknown[];
    /**
     * The replies to the post (comments, pingbacks, trackbacks).
     */
    replies?: unknown[];
    /**
     * The taxonomy terms for the post.
     */
    "wp:term"?: unknown[];
    /**
     * The featured image post.
     */
    "wp:featuredmedia"?: unknown[];
    /**
     * The parent post.
     */
    up?: unknown[];
    [k: string]: unknown[];
  };
  [k: string]: unknown;
}
/**
 * A media object in a REST API context.
 */
export interface WP_REST_API_Media {
  /**
   * The date the object was published, in the site's timezone.
   */
  date: WP_REST_API_Date_Time;
  /**
   * The date the object was published, as GMT.
   */
  date_gmt: WP_REST_API_Date_Time;
  /**
   * The globally unique identifier for the object.
   */
  guid: {
    /**
     * GUID for the object, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string;
    /**
     * GUID for the object, transformed for display.
     */
    rendered: string;
  };
  /**
   * Unique identifier for the object.
   */
  id: number;
  /**
   * URL to the object.
   */
  link: string;
  /**
   * The date the object was last modified, in the site's timezone.
   */
  modified: WP_REST_API_Date_Time;
  /**
   * The date the object was last modified, as GMT.
   */
  modified_gmt: WP_REST_API_Date_Time;
  /**
   * An alphanumeric identifier for the object unique to its type.
   */
  slug: string;
  /**
   * A named status for the object.
   */
  status: WP_Post_Status_Name | string;
  /**
   * Type of Post for the object.
   */
  type: WP_Post_Type_Name.attachment;
  /**
   * Alternative text to display when attachment is not displayed.
   */
  alt_text: string;
  /**
   * The attachment caption.
   */
  caption: {
    /**
     * Caption for the attachment, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string;
    /**
     * HTML caption for the attachment, transformed for display.
     */
    rendered: string;
  };
  /**
   * The attachment description.
   */
  description: {
    /**
     * Description for the object, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string;
    /**
     * HTML description for the object, transformed for display.
     */
    rendered: string;
  };
  /**
   * The attachment MIME type.
   */
  media_type: string;
  /**
   * Details about the media file, specific to its type.
   */
  media_details: {
    [k: string]: unknown;
  };
  /**
   * The ID for the associated post of the attachment.
   */
  post: number;
  /**
   * URL to the original attachment file.
   */
  source_url: string;
  /**
   * List of the missing image sizes of the attachment.  Only present when using the 'edit' context.
   */
  missing_image_sizes: string[];
  /**
   * Permalink template for the object. Only present when using the 'edit' context and the post type is public.
   */
  permalink_template?: string;
  /**
   * Slug automatically generated from the object title. Only present when using the 'edit' context and the post type is public.
   */
  generated_slug?: string;
  /**
   * The title for the object.
   */
  title: {
    /**
     * Title for the object, as it exists in the database. Only present when using the 'edit' context.
     */
    raw?: string;
    /**
     * HTML title for the object, transformed for display.
     */
    rendered: string;
  };
  /**
   * The ID for the author of the object.
   */
  author: number;
  /**
   * Whether or not comments are open on the object.
   */
  comment_status: WP_Post_Comment_Status_Name;
  /**
   * Whether or not the object can be pinged.
   */
  ping_status: WP_Post_Comment_Status_Name;
  /**
   * Meta fields.
   */
  meta:
    | []
    | {
        [k: string]: unknown;
      };
  /**
   * The theme file to use to display the object.
   */
  template: string;
  _links: WP_REST_API_Object_Links;
  /**
   * The embedded representation of relations. Only present when the '_embed' query parameter is set.
   */
  _embedded?: {
    /**
     * The author of the post.
     */
    author: unknown[];
    /**
     * The featured image post.
     */
    "wp:featuredmedia"?: unknown[];
    [k: string]: unknown[];
  };
  [k: string]: unknown;
}
/**
 * A taxonomy term object in a REST API context.
 */
export interface WP_REST_API_Term {
  /**
   * Unique identifier for the term.
   */
  id: number;
  /**
   * Number of published posts for the term.
   */
  count: number;
  /**
   * HTML description of the term.
   */
  description: string;
  /**
   * URL of the term.
   */
  link: string;
  /**
   * HTML title for the term.
   */
  name: string;
  /**
   * An alphanumeric identifier for the term unique to its type.
   */
  slug: string;
  /**
   * Type attribution for the term.
   */
  taxonomy: WP_Taxonomy_Name | string;
  /**
   * The parent term ID. Only present for hierarchical taxonomies.
   */
  parent?: number;
  /**
   * Meta fields.
   */
  meta:
    | []
    | {
        [k: string]: unknown;
      };
  _links: WP_REST_API_Object_Links;
  [k: string]: unknown;
}
/**
 * A user object in a REST API context.
 */
export interface WP_REST_API_User {
  /**
   * Unique identifier for the user.
   */
  id: number;
  /**
   * Login name for the user. Only present when using the 'edit' context.
   */
  username?: string;
  /**
   * Display name for the user.
   */
  name: string;
  /**
   * First name for the user. Only present when using the 'edit' context.
   */
  first_name?: string;
  /**
   * Last name for the user. Only present when using the 'edit' context.
   */
  last_name?: string;
  /**
   * The email address for the user. Only present when using the 'edit' context.
   */
  email?: string;
  /**
   * URL of the user.
   */
  url: string;
  /**
   * Description of the user.
   */
  description: string;
  /**
   * Author URL of the user.
   */
  link: string;
  /**
   * Locale for the user. Only present when using the 'edit' context.
   */
  locale?: string;
  /**
   * The nickname for the user. Only present when using the 'edit' context.
   */
  nickname?: string;
  /**
   * An alphanumeric identifier for the user.
   */
  slug: string;
  /**
   * Registration date for the user. Only present when using the 'edit' context.
   */
  registered_date?: WP_REST_API_Date_Time;
  /**
   * Roles assigned to the user. Only present when using the 'edit' context.
   */
  roles?: (WP_User_Role_Name | string)[];
  /**
   * All capabilities assigned to the user. Only present when using the 'edit' context.
   */
  capabilities?: WP_User_Caps;
  /**
   * Any extra capabilities assigned to the user. Only present when using the 'edit' context.
   */
  extra_capabilities?: WP_User_Caps;
  /**
   * Avatar URLs for the user.
   */
  avatar_urls?: {
    /**
     * Avatar URL with image size of 24 pixels.
     */
    "24": string;
    /**
     * Avatar URL with image size of 48 pixels.
     */
    "48": string;
    /**
     * Avatar URL with image size of 96 pixels.
     */
    "96": string;
    /**
     * Avatar URL with image of another size.
     */
    [k: string]: string;
  };
  /**
   * Meta fields.
   */
  meta:
    | []
    | {
        [k: string]: unknown;
      };
  _links: WP_REST_API_Object_Links;
  [k: string]: unknown;
}
/**
 * A REST API error response.
 */
export interface WP_REST_API_Error {
  /**
   * The error message code.
   */
  code: string;
  /**
   * The error message text.
   */
  message: string;
  /**
   * Extra data about the error
   */
  data: {
    /**
     * The HTTP status code
     */
    status?: WP_Http_Status_Code;
    [k: string]: unknown;
  };
  /**
   * Additional error objects, if there are any.
   */
  additional_errors?: WP_REST_API_Error[];
}

export const enum WP_Post_Status_Name {
  publish = "publish",
  draft = "draft",
  auto_draft = "auto-draft",
  inherit = "inherit",
  pending = "pending",
  future = "future",
  trash = "trash",
  private = "private",
}
export const enum WP_Post_Type_Name {
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
export const enum WP_Object_Filter_Context {
  attribute = "attribute",
  db = "db",
  display = "display",
  edit = "edit",
  js = "js",
  raw = "raw",
  rss = "rss",
}
export const enum WP_Taxonomy_Name {
  category = "category",
  post_tag = "post_tag",
  nav_menu = "nav_menu",
  post_format = "post_format",
}
export const enum WP_User_Role_Name {
  administrator = "administrator",
  editor = "editor",
  author = "author",
  contributor = "contributor",
  subscriber = "subscriber",
}
export const enum WP_Comment_Status_Name {
  approved = "approved",
  unapproved = "unapproved",
  spam = "spam",
  trash = "trash",
}
export const enum WP_Comment_Type_Name {
  comment = "comment",
  pingback = "pingback",
  trackback = "trackback",
}
export const enum WP_Post_Comment_Status_Name {
  open = "open",
  closed = "closed",
}
export const enum WP_Post_Format_Name {
  aside = "aside",
  audio = "audio",
  chat = "chat",
  gallery = "gallery",
  image = "image",
  link = "link",
  quote = "quote",
  standard = "standard",
  status = "status",
  video = "video",
}
export const enum WP_Http_Status_Code {
  HTTP_CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,
  EARLY_HINTS = 103,
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  MULTI_STATUS = 207,
  IM_USED = 226,
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  USE_PROXY = 305,
  RESERVED = 306,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  REQUEST_ENTITY_TOO_LARGE = 413,
  REQUEST_URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  IM_A_TEAPOT = 418,
  MISDIRECTED_REQUEST = 421,
  UNPROCESSABLE_ENTITY = 422,
  LOCKED = 423,
  FAILED_DEPENDENCY = 424,
  UPGRADE_REQUIRED = 426,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  VARIANT_ALSO_NEGOTIATES = 506,
  INSUFFICIENT_STORAGE = 507,
  NOT_EXTENDED = 510,
  NETWORK_AUTHENTICATION_REQUIRED = 511,
}
