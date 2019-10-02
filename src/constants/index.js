
// Login Page
export const APP_SAVE_FORCE_UPDATE = "APP_SAVE_FORCE_UPDATE";

// Login Page
export const HTTP_LOGIN_FETCHING = "HTTP_LOGIN_FETCHING";
export const HTTP_LOGIN_SUCCESS = "HTTP_LOGIN_SUCCESS";
export const HTTP_LOGIN_FAILED = "HTTP_LOGIN_FAILED";

// Account Page
export const HTTP_ACCOUNT_FETCHING = "HTTP_ACCOUNT_FETCHING";
export const HTTP_ACCOUNT_SUCCESS = "HTTP_ACCOUNT_SUCCESS";
export const HTTP_ACCOUNT_FAILED = "HTTP_ACCOUNT_FAILED";

// Device API
export const HTTP_DEVICE_FETCHING = "HTTP_DEVICE_FETCHING";
export const HTTP_DEVICE_SUCCESS = "HTTP_DEVICE_SUCCESS";
export const HTTP_DEVICE_FAILED = "HTTP_DEVICE_FAILED";

//Rate
export const HTTP_RATE_FETCHING = "HTTP_RATE_FETCHING";
export const HTTP_RATE_SUCCESS = "HTTP_RATE_SUCCESS";
export const HTTP_RATE_FAILED = "HTTP_RATE_FAILED";

// Account Edit Page
export const HTTP_ACCOUNT_EDIT_FETCHING = "HTTP_ACCOUNT_EDIT_FETCHING";
export const HTTP_ACCOUNT_EDIT_SUCCESS = "HTTP_ACCOUNT_EDIT_SUCCESS";
export const HTTP_ACCOUNT_EDIT_FAILED = "HTTP_ACCOUNT_EDIT_FAILED";
export const HTTP_ACCOUNT_EDIT_INITIALED = "HTTP_ACCOUNT_EDIT_INITIALED";

// Stock Page
export const HTTP_STOCK_FETCHING = "HTTP_STOCK_FETCHING";
export const HTTP_STOCK_SUCCESS = "HTTP_STOCK_SUCCESS";
export const HTTP_STOCK_FAILED = "HTTP_STOCK_FAILED";

// Billing Page
export const HTTP_BILLING_FETCHING = "HTTP_BILLING_FETCHING";
export const HTTP_BILLING_SUCCESS = "HTTP_BILLING_SUCCESS";
export const HTTP_BILLING_FAILED = "HTTP_BILLING_FAILED";

// CDR Page
export const HTTP_CDR_FETCHING = "HTTP_CDR_FETCHING";
export const HTTP_CDR_SUCCESS = "HTTP_CDR_SUCCESS";
export const HTTP_CDR_FAILED = "HTTP_CDR_FAILED";

// Transaction Page
export const HTTP_TRANSACTION_FETCHING = "HTTP_TRANSACTION_FETCHING";
export const HTTP_TRANSACTION_SUCCESS = "HTTP_TRANSACTION_SUCCESS";
export const HTTP_TRANSACTION_FAILED = "HTTP_TRANSACTION_FAILED";

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

export const apiUrl =  "http://203.121.143.50:8081/api/v1";
export const imageUrl = "http://203.121.143.50:8081";


export const server = {    
    LOGIN_URL : `login`,    
    ACCOUNT_URL : `account`,
    PRODUCT_URL : `product`,    
    BILLING_URL : `billing`, 
    CDR_PER_MONTH_URL : `cdrPerMonth`,   
    TRANSACTION_URL :  `transaction`,
    REPORT_URL: `report`,    
    TOKEN_KEY : `token`,
}

