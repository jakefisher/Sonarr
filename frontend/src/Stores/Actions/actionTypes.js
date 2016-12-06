//
// BASE

export const SET = 'SET';

export const UPDATE = 'UPDATE';
export const UPDATE_PROVIDER = 'UPDATE_PROVIDER';
export const UPDATE_SERVER_SIDE_COLLECTION = 'UPDATE_SERVER_SIDE_COLLECTION';

export const SET_SETTING_VALUE = 'SET_SETTING_VALUE';
export const CLEAR_PENDING_CHANGES = 'CLEAR_PENDING_CHANGES';
export const SAVE_SETTINGS = 'SAVE_SETTINGS';

export const DELETE_PROVIDER = 'DELETE_PROVIDER';

//
// Episodes

export const FETCH_EPISODES = 'FETCH_EPISODES';
export const SET_EPISODES_SORT = 'SET_EPISODES_SORT';
export const CLEAR_EPISODES = 'CLEAR_EPISODES';

//
// Episode Files

export const FETCH_EPISODE_FILES = 'FETCH_EPISODE_FILES';
export const CLEAR_EPISODE_FILES = 'CLEAR_EPISODE_FILES';

//
// Episode History

export const FETCH_EPISODE_HISTORY = 'FETCH_EPISODE_HISTORY';
export const CLEAR_EPISODE_HISTORY = 'CLEAR_EPISODE_HISTORY';
export const EPISODE_HISTORY_MARK_AS_FAILED = 'EPISODE_HISTORY_MARK_AS_FAILED';

//
// Releases

export const FETCH_RELEASES = 'FETCH_RELEASES';
export const SET_RELEASES_SORT = 'SET_RELEASES_SORT';
export const CLEAR_RELEASES = 'CLEAR_RELEASES';
export const GRAB_RELEASE = 'GRAB_RELEASE';
export const UPDATE_RELEASE = 'UPDATE_RELEASE';

//
// Queue

export const FETCH_QUEUE_STATUS = 'FETCH_QUEUE_STATUS';
export const FETCH_QUEUE_DETAILS = 'FETCH_QUEUE_DETAILS';
export const CLEAR_QUEUE_DETAILS = 'CLEAR_QUEUE_DETAILS';

//
// Wanted

export const FETCH_MISSING = 'FETCH_MISSING';
export const GOTO_FIRST_MISSING_PAGE = 'GOTO_FIRST_MISSING_PAGE';
export const GOTO_PREVIOUS_MISSING_PAGE = 'GOTO_PREVIOUS_MISSING_PAGE';
export const GOTO_NEXT_MISSING_PAGE = 'GOTO_NEXT_MISSING_PAGE';
export const GOTO_LAST_MISSING_PAGE = 'GOTO_LAST_MISSING_PAGE';
export const GOTO_MISSING_PAGE = 'GOTO_MISSING_PAGE';
export const SET_MISSING_SORT = 'SET_MISSING_SORT';
export const SET_MISSING_FILTER = 'SET_MISSING_FILTER';

export const TOGGLE_MISSING_EPISODE_MONITORED = 'TOGGLE_MISSING_EPISODE_MONITORED';
export const BATCH_UNMONITOR_MISSING_EPISODES = 'BATCH_UNMONITOR_MISSING_EPISODES';

export const FETCH_CUTOFF_UNMET = 'FETCH_CUTOFF_UNMET';
export const GOTO_FIRST_CUTOFF_UNMET_PAGE = 'GOTO_FIRST_CUTOFF_UNMET_PAGE';
export const GOTO_PREVIOUS_CUTOFF_UNMET_PAGE = 'GOTO_PREVIOUS_CUTOFF_UNMET_PAGE';
export const GOTO_NEXT_CUTOFF_UNMET_PAGE = 'GOTO_NEXT_CUTOFF_UNMET_PAGE';
export const GOTO_LAST_CUTOFF_UNMET_PAGE = 'GOTO_LAST_CUTOFF_UNMET_PAGE';
export const GOTO_CUTOFF_UNMET_PAGE = 'GOTO_CUTOFF_UNMET_PAGE';
export const SET_CUTOFF_UNMET_SORT = 'SET_CUTOFF_UNMET_SORT';
export const SET_CUTOFF_UNMET_FILTER = 'SET_CUTOFF_UNMET_FILTER';

export const TOGGLE_CUTOFF_UNMET_EPISODE_MONITORED = 'TOGGLE_CUTOFF_UNMET_EPISODE_MONITORED';
export const BATCH_UNMONITOR_CUTOFF_UNMET_EPISODES = 'BATCH_UNMONITOR_CUTOFF_UNMET_EPISODES';

//
// Settings

export const TOGGLE_ADVANCED_SETTINGS = 'TOGGLE_ADVANCED_SETTINGS';

export const FETCH_UI_SETTINGS = 'FETCH_UI_SETTINGS';
export const SET_UI_SETTINGS_VALUE = 'SET_UI_SETTINGS_VALUE';
export const SAVE_UI_SETTINGS = 'SAVE_UI_SETTINGS';

export const FETCH_MEDIA_MANAGEMENT_SETTINGS = 'FETCH_MEDIA_MANAGEMENT_SETTINGS';
export const SET_MEDIA_MANAGEMENT_SETTINGS_VALUE = 'SET_MEDIA_MANAGEMENT_SETTINGS_VALUE';
export const SAVE_MEDIA_MANAGEMENT_SETTINGS = 'SAVE_MEDIA_MANAGEMENT_SETTINGS';

export const FETCH_NAMING_SETTINGS = 'FETCH_NAMING_SETTINGS';
export const SET_NAMING_SETTINGS_VALUE = 'SET_NAMING_SETTINGS_VALUE';
export const SAVE_NAMING_SETTINGS = 'SAVE_NAMING_SETTINGS';
export const FETCH_NAMING_EXAMPLES = 'FETCH_NAMING_EXAMPLES';

export const FETCH_QUALITY_PROFILES = 'FETCH_QUALITY_PROFILES';
export const FETCH_QUALITY_PROFILE_SCHEMA = 'FETCH_QUALITY_PROFILE_SCHEMA';
export const SET_QUALITY_PROFILE_VALUE = 'SET_QUALITY_PROFILE_VALUE';
export const SAVE_QUALITY_PROFILE = 'SAVE_QUALITY_PROFILE';
export const DELETE_QUALITY_PROFILE = 'DELETE_QUALITY_PROFILE';

export const FETCH_DELAY_PROFILES = 'FETCH_DELAY_PROFILES';
export const SET_DELAY_PROFILE_VALUE = 'SET_DELAY_PROFILE_VALUE';
export const SAVE_DELAY_PROFILE = 'SAVE_DELAY_PROFILE';
export const DELETE_DELAY_PROFILE = 'DELETE_DELAY_PROFILE';
export const REORDER_DELAY_PROFILE = 'REORDER_DELAY_PROFILE';

export const FETCH_QUALITY_DEFINITIONS = 'FETCH_QUALITY_DEFINITIONS';
export const SET_QUALITY_DEFINITION_VALUE = 'SET_QUALITY_DEFINITION_VALUE';
export const SAVE_QUALITY_DEFINITIONS = 'SAVE_QUALITY_DEFINITIONS';

export const FETCH_INDEXERS = 'FETCH_INDEXERS';
export const FETCH_INDEXER_SCHEMA = 'FETCH_INDEXER_SCHEMA';
export const SELECT_INDEXER_SCHEMA = 'SELECT_INDEXER_SCHEMA';
export const SET_INDEXER_VALUE = 'SET_INDEXER_VALUE';
export const SET_INDEXER_FIELD_VALUE = 'SET_INDEXER_FIELD_VALUE';
export const SAVE_INDEXER = 'SAVE_INDEXER';
export const DELETE_INDEXER = 'DELETE_INDEXER';
export const TEST_INDEXER = 'TEST_INDEXER';

export const FETCH_INDEXER_OPTIONS = 'FETCH_INDEXER_OPTIONS';
export const SET_INDEXER_OPTIONS_VALUE = 'SET_INDEXER_OPTIONS_VALUE';
export const SAVE_INDEXER_OPTIONS = 'SAVE_INDEXER_OPTIONS';

export const FETCH_RESTRICTIONS = 'FETCH_RESTRICTIONS';
export const SET_RESTRICTION_VALUE = 'SET_RESTRICTION_VALUE';
export const SAVE_RESTRICTION = 'SAVE_RESTRICTION';
export const DELETE_RESTRICTION = 'DELETE_RESTRICTION';

export const FETCH_DOWNLOAD_CLIENTS = 'FETCH_DOWNLOAD_CLIENTS';
export const FETCH_DOWNLOAD_CLIENT_SCHEMA = 'FETCH_DOWNLOAD_CLIENT_SCHEMA';
export const SELECT_DOWNLOAD_CLIENT_SCHEMA = 'SELECT_DOWNLOAD_CLIENT_SCHEMA';
export const SET_DOWNLOAD_CLIENT_VALUE = 'SET_DOWNLOAD_CLIENT_VALUE';
export const SET_DOWNLOAD_CLIENT_FIELD_VALUE = 'SET_DOWNLOAD_CLIENT_FIELD_VALUE';
export const SAVE_DOWNLOAD_CLIENT = 'SAVE_DOWNLOAD_CLIENT';
export const DELETE_DOWNLOAD_CLIENT = 'DELETE_DOWNLOAD_CLIENT';
export const TEST_DOWNLOAD_CLIENT = 'TEST_DOWNLOAD_CLIENT';

export const FETCH_DOWNLOAD_CLIENT_OPTIONS = 'FETCH_DOWNLOAD_CLIENT_OPTIONS';
export const SET_DOWNLOAD_CLIENT_OPTIONS_VALUE = 'SET_DOWNLOAD_CLIENT_OPTIONS_VALUE';
export const SAVE_DOWNLOAD_CLIENT_OPTIONS = 'SAVE_DOWNLOAD_CLIENT_OPTIONS';

export const FETCH_REMOTE_PATH_MAPPINGS = 'FETCH_REMOTE_PATH_MAPPINGS';
export const SET_REMOTE_PATH_MAPPING_VALUE = 'SET_REMOTE_PATH_MAPPING_VALUE';
export const SAVE_REMOTE_PATH_MAPPING = 'SAVE_REMOTE_PATH_MAPPING';
export const DELETE_REMOTE_PATH_MAPPING = 'DELETE_REMOTE_PATH_MAPPING';

export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const FETCH_NOTIFICATION_SCHEMA = 'FETCH_NOTIFICATION_SCHEMA';
export const SELECT_NOTIFICATION_SCHEMA = 'SELECT_NOTIFICATION_SCHEMA';
export const SET_NOTIFICATION_VALUE = 'SET_NOTIFICATION_VALUE';
export const SET_NOTIFICATION_FIELD_VALUE = 'SET_NOTIFICATION_FIELD_VALUE';
export const SAVE_NOTIFICATION = 'SAVE_NOTIFICATION';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
export const TEST_NOTIFICATION = 'TEST_NOTIFICATION';

export const FETCH_METADATA = 'FETCH_METADATA';
export const SET_METADATA_VALUE = 'SET_METADATA_VALUE';
export const SET_METADATA_FIELD_VALUE = 'SET_METADATA_FIELD_VALUE';
export const SAVE_METADATA = 'SAVE_METADATA';

//
// System

export const FETCH_STATUS = 'FETCH_STATUS';
export const FETCH_HEALTH = 'FETCH_HEALTH';
export const FETCH_DISK_SPACE = 'FETCH_DISK_SPACE';

export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_BACKUPS = 'FETCH_BACKUPS';
export const FETCH_UPDATES = 'FETCH_UPDATES';

export const FETCH_LOGS = 'FETCH_LOGS';
export const GOTO_FIRST_LOGS_PAGE = 'GOTO_FIRST_LOGS_PAGE';
export const GOTO_PREVIOUS_LOGS_PAGE = 'GOTO_PREVIOUS_LOGS_PAGE';
export const GOTO_NEXT_LOGS_PAGE = 'GOTO_NEXT_LOGS_PAGE';
export const GOTO_LAST_LOGS_PAGE = 'GOTO_LAST_LOGS_PAGE';
export const GOTO_LOGS_PAGE = 'GOTO_LOGS_PAGE';
export const SET_LOGS_SORT = 'SET_LOGS_SORT';
export const SET_LOGS_FILTER = 'SET_LOGS_FILTER';

export const FETCH_LOG_FILES = 'FETCH_LOG_FILES';
export const FETCH_UPDATE_LOG_FILES = 'FETCH_UPDATE_LOG_FILES';

export const FETCH_GENERAL_SETTINGS = 'FETCH_GENERAL_SETTINGS';
export const SET_GENERAL_SETTINGS_VALUE = 'SET_GENERAL_SETTINGS_VALUE';
export const SAVE_GENERAL_SETTINGS = 'SAVE_UI_SETTINGS';

//
// Commands

export const FETCH_COMMANDS = 'FETCH_COMMANDS';
export const EXECUTE_COMMAND = 'EXECUTE_COMMAND';
export const ADD_COMMAND = 'ADD_COMMAND';
export const UPDATE_COMMAND = 'UPDATE_COMMAND';
export const FINISH_COMMAND = 'FINISH_COMMAND';
export const REMOVE_COMMAND = 'REMOVE_COMMAND';
export const REGISTER_FINISH_COMMAND_HANDLER = 'REGISTER_FINISH_COMMAND_HANDLER';
export const UNREGISTER_FINISH_COMMAND_HANDLER = 'UNREGISTER_FINISH_COMMAND_HANDLER';

//
// Paths

export const FETCH_PATHS = 'FETCH_PATHS';
export const UPDATE_PATHS = 'UPDATE_PATHS';
export const CLEAR_PATHS = 'CLEAR_PATHS';

//
// Languages

export const FETCH_LANGUAGES = 'FETCH_LANGUAGES';

//
// Tags

export const FETCH_TAGS = 'FETCH_TAGS';
export const ADD_TAG = 'ADD_TAG';

//
// Captcha

export const REFRESH_CAPTCHA = 'REFRESH_CAPTCHA';
export const GET_CAPTCHA_COOKIE = 'GET_CAPTCHA_COOKIE';
export const SET_CAPTCHA_VALUE = 'SET_CAPTCHA_VALUE';
export const RESET_CAPTCHA = 'RESET_CAPTCHA';

//
// OAuth

export const START_OAUTH = 'START_OAUTH';
export const GET_OAUTH_TOKEN = 'GET_OAUTH_TOKEN';
export const SET_OAUTH_VALUE = 'SET_OAUTH_VALUE';
export const RESET_OAUTH = 'RESET_OAUTH';

//
// Manual Import

export const FETCH_MANUAL_IMPORT_ITEMS = 'FETCH_MANUAL_IMPORT_ITEMS';
export const UPDATE_MANUAL_IMPORT_ITEM = 'UPDATE_MANUAL_IMPORT_ITEM';
export const SET_MANUAL_IMPORT_SORT = 'SET_MANUAL_IMPORT_SORT';
export const CLEAR_MANUAL_IMPORT = 'CLEAR_MANUAL_IMPORT';
export const ADD_RECENT_FOLDER = 'ADD_RECENT_FOLDER';
export const REMOVE_RECENT_FOLDER = 'REMOVE_RECENT_FOLDER';
