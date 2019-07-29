
// Login Page
export const APP_SAVE_FORCE_UPDATE = "APP_SAVE_FORCE_UPDATE";

// Login Page
export const HTTP_LOGIN_FETCHING = "HTTP_LOGIN_FETCHING";
export const HTTP_LOGIN_SUCCESS = "HTTP_LOGIN_SUCCESS";
export const HTTP_LOGIN_FAILED = "HTTP_LOGIN_FAILED";

// Customer Page
export const HTTP_ACCOUNT_FETCHING = "HTTP_ACCOUNT_FETCHING";
export const HTTP_ACCOUNT_SUCCESS = "HTTP_ACCOUNT_SUCCESS";
export const HTTP_ACCOUNT_FAILED = "HTTP_ACCOUNT_FAILED";

// Stock Page
export const HTTP_STOCK_FETCHING = "HTTP_STOCK_FETCHING";
export const HTTP_STOCK_SUCCESS = "HTTP_STOCK_SUCCESS";
export const HTTP_STOCK_FAILED = "HTTP_STOCK_FAILED";

// Stock Edit Page
export const HTTP_STOCK_EDIT_FETCHING = "HTTP_STOCK_EDIT_FETCHING";
export const HTTP_STOCK_EDIT_SUCCESS = "HTTP_STOCK_EDIT_SUCCESS";
export const HTTP_STOCK_EDIT_FAILED = "HTTP_STOCK_EDIT_FAILED";
export const HTTP_STOCK_EDIT_INITIALED = "HTTP_STOCK_EDIT_INITIALED";

// Billing Page
export const HTTP_BILLING_FETCHING = "HTTP_BILLING_FETCHING";
export const HTTP_BILLING_SUCCESS = "HTTP_BILLING_SUCCESS";
export const HTTP_BILLING_FAILED = "HTTP_BILLING_FAILED";

// CDR Page
export const HTTP_CDR_FETCHING = "HTTP_CDR_FETCHING";
export const HTTP_CDR_SUCCESS = "HTTP_CDR_SUCCESS";
export const HTTP_CDR_FAILED = "HTTP_CDR_FAILED";

// Shop Page
export const HTTP_SHOP_FETCHING = "HTTP_SHOP_FETCHING";
export const HTTP_SHOP_SUCCESS = "HTTP_SHOP_SUCCESS";
export const HTTP_SHOP_FAILED = "HTTP_SHOP_FAILED";

export const SHOP_UPDATE_ORDER = "SHOP_UPDATE_ORDER";
export const SHOP_UPDATE_PAYMENT = "SHOP_UPDATE_PAYMENT";

// Error Code
export const E_PICKER_CANCELLED = 'E_PICKER_CANCELLED'
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR = 'E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR'
export const E_PERMISSION_MISSING = 'E_PERMISSION_MISSING'
export const E_PICKER_NO_CAMERA_PERMISSION = 'E_PICKER_NO_CAMERA_PERMISSION'
export const E_USER_CANCELLED = 'E_USER_CANCELLED'
export const E_UNKNOWN = 'E_UNKNOWN'
export const E_DEVELOPER_ERROR = 'E_DEVELOPER_ERROR'
export const TIMEOUT_NETWORK = 'ECONNABORTED' // request service timeout
export const NOT_CONNECT_NETWORK = 'NOT_CONNECT_NETWORK' 

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE = 'Cannot connect to server, Please try again.' 
export const NETWORK_TIMEOUT_MESSAGE = 'A network timeout has occurred, Please try again.'  
export const UPLOAD_PHOTO_FAIL_MESSAGE = 'An error has occurred. The photo was unable to upload.' 



//export const apiUrl =  "http://192.168.20.241:8081/billing/api/v1";
//export const imageUrl = "http://192.168.20.241:8081";

export const apiUrl =  "http://203.121.143.83:8081/api/v1";
export const imageUrl = "http://203.121.143.83:8081";


export const server = {    
    LOGIN_URL : `login`,    
    ACCOUNT_URL : `account`,
    PRODUCT_URL : `product`,    
    BILLING_URL : `billing`, 
    CDR_PER_MONTH_URL : `cdrPerMonth`,   
    REPORT_URL: `report`,    
    TOKEN_KEY : `token`,
}

