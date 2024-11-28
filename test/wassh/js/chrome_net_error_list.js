// Copyright 2023 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Chrome net_error_list constants.
 */

/* eslint-disable max-len */

export const SUCCESS = 0;
export const IO_PENDING = -1;
export const FAILED = -2;
export const ABORTED = -3;
export const INVALID_ARGUMENT = -4;
export const INVALID_HANDLE = -5;
export const FILE_NOT_FOUND = -6;
export const TIMED_OUT = -7;
export const FILE_TOO_BIG = -8;
export const UNEXPECTED = -9;
export const ACCESS_DENIED = -10;
export const NOT_IMPLEMENTED = -11;
export const INSUFFICIENT_RESOURCES = -12;
export const OUT_OF_MEMORY = -13;
export const UPLOAD_FILE_CHANGED = -14;
export const SOCKET_NOT_CONNECTED = -15;
export const FILE_EXISTS = -16;
export const FILE_PATH_TOO_LONG = -17;
export const FILE_NO_SPACE = -18;
export const FILE_VIRUS_INFECTED = -19;
export const BLOCKED_BY_CLIENT = -20;
export const NETWORK_CHANGED = -21;
export const BLOCKED_BY_ADMINISTRATOR = -22;
export const SOCKET_IS_CONNECTED = -23;
export const UPLOAD_STREAM_REWIND_NOT_SUPPORTED = -25;
export const CONTEXT_SHUT_DOWN = -26;
export const BLOCKED_BY_RESPONSE = -27;
export const CLEARTEXT_NOT_PERMITTED = -29;
export const BLOCKED_BY_CSP = -30;
export const H2_OR_QUIC_REQUIRED = -31;
export const BLOCKED_BY_ORB = -32;
export const CONNECTION_CLOSED = -100;
export const CONNECTION_RESET = -101;
export const CONNECTION_REFUSED = -102;
export const CONNECTION_ABORTED = -103;
export const CONNECTION_FAILED = -104;
export const NAME_NOT_RESOLVED = -105;
export const INTERNET_DISCONNECTED = -106;
export const SSL_PROTOCOL_ERROR = -107;
export const ADDRESS_INVALID = -108;
export const ADDRESS_UNREACHABLE = -109;
export const SSL_CLIENT_AUTH_CERT_NEEDED = -110;
export const TUNNEL_CONNECTION_FAILED = -111;
export const NO_SSL_VERSIONS_ENABLED = -112;
export const SSL_VERSION_OR_CIPHER_MISMATCH = -113;
export const SSL_RENEGOTIATION_REQUESTED = -114;
export const PROXY_AUTH_UNSUPPORTED = -115;
export const BAD_SSL_CLIENT_AUTH_CERT = -117;
export const CONNECTION_TIMED_OUT = -118;
export const HOST_RESOLVER_QUEUE_TOO_LARGE = -119;
export const SOCKS_CONNECTION_FAILED = -120;
export const SOCKS_CONNECTION_HOST_UNREACHABLE = -121;
export const ALPN_NEGOTIATION_FAILED = -122;
export const SSL_NO_RENEGOTIATION = -123;
export const WINSOCK_UNEXPECTED_WRITTEN_BYTES = -124;
export const SSL_DECOMPRESSION_FAILURE_ALERT = -125;
export const SSL_BAD_RECORD_MAC_ALERT = -126;
export const PROXY_AUTH_REQUESTED = -127;
export const PROXY_CONNECTION_FAILED = -130;
export const MANDATORY_PROXY_CONFIGURATION_FAILED = -131;
export const PRECONNECT_MAX_SOCKET_LIMIT = -133;
export const SSL_CLIENT_AUTH_PRIVATE_KEY_ACCESS_DENIED = -134;
export const SSL_CLIENT_AUTH_CERT_NO_PRIVATE_KEY = -135;
export const PROXY_CERTIFICATE_INVALID = -136;
export const NAME_RESOLUTION_FAILED = -137;
export const NETWORK_ACCESS_DENIED = -138;
export const TEMPORARILY_THROTTLED = -139;
export const HTTPS_PROXY_TUNNEL_RESPONSE_REDIRECT = -140;
export const SSL_CLIENT_AUTH_SIGNATURE_FAILED = -141;
export const MSG_TOO_BIG = -142;
export const WS_PROTOCOL_ERROR = -145;
export const ADDRESS_IN_USE = -147;
export const SSL_HANDSHAKE_NOT_COMPLETED = -148;
export const SSL_BAD_PEER_PUBLIC_KEY = -149;
export const SSL_PINNED_KEY_NOT_IN_CERT_CHAIN = -150;
export const CLIENT_AUTH_CERT_TYPE_UNSUPPORTED = -151;
export const SSL_DECRYPT_ERROR_ALERT = -153;
export const WS_THROTTLE_QUEUE_TOO_LARGE = -154;
export const SSL_SERVER_CERT_CHANGED = -156;
export const SSL_UNRECOGNIZED_NAME_ALERT = -159;
export const SOCKET_SET_RECEIVE_BUFFER_SIZE_ERROR = -160;
export const SOCKET_SET_SEND_BUFFER_SIZE_ERROR = -161;
export const SOCKET_RECEIVE_BUFFER_SIZE_UNCHANGEABLE = -162;
export const SOCKET_SEND_BUFFER_SIZE_UNCHANGEABLE = -163;
export const SSL_CLIENT_AUTH_CERT_BAD_FORMAT = -164;
export const ICANN_NAME_COLLISION = -166;
export const SSL_SERVER_CERT_BAD_FORMAT = -167;
export const CT_STH_PARSING_FAILED = -168;
export const CT_STH_INCOMPLETE = -169;
export const UNABLE_TO_REUSE_CONNECTION_FOR_PROXY_AUTH = -170;
export const CT_CONSISTENCY_PROOF_PARSING_FAILED = -171;
export const SSL_OBSOLETE_CIPHER = -172;
export const WS_UPGRADE = -173;
export const READ_IF_READY_NOT_IMPLEMENTED = -174;
export const NO_BUFFER_SPACE = -176;
export const SSL_CLIENT_AUTH_NO_COMMON_ALGORITHMS = -177;
export const EARLY_DATA_REJECTED = -178;
export const WRONG_VERSION_ON_EARLY_DATA = -179;
export const TLS13_DOWNGRADE_DETECTED = -180;
export const SSL_KEY_USAGE_INCOMPATIBLE = -181;
export const INVALID_ECH_CONFIG_LIST = -182;
export const ECH_NOT_NEGOTIATED = -183;
export const ECH_FALLBACK_CERTIFICATE_INVALID = -184;
export const CERT_COMMON_NAME_INVALID = -200;
export const CERT_DATE_INVALID = -201;
export const CERT_AUTHORITY_INVALID = -202;
export const CERT_CONTAINS_ERRORS = -203;
export const CERT_NO_REVOCATION_MECHANISM = -204;
export const CERT_UNABLE_TO_CHECK_REVOCATION = -205;
export const CERT_REVOKED = -206;
export const CERT_INVALID = -207;
export const CERT_WEAK_SIGNATURE_ALGORITHM = -208;
export const CERT_NON_UNIQUE_NAME = -210;
export const CERT_WEAK_KEY = -211;
export const CERT_NAME_CONSTRAINT_VIOLATION = -212;
export const CERT_VALIDITY_TOO_LONG = -213;
export const CERTIFICATE_TRANSPARENCY_REQUIRED = -214;
export const CERT_SYMANTEC_LEGACY = -215;
export const CERT_KNOWN_INTERCEPTION_BLOCKED = -217;
export const CERT_END = -219;
export const INVALID_URL = -300;
export const DISALLOWED_URL_SCHEME = -301;
export const UNKNOWN_URL_SCHEME = -302;
export const INVALID_REDIRECT = -303;
export const TOO_MANY_REDIRECTS = -310;
export const UNSAFE_REDIRECT = -311;
export const UNSAFE_PORT = -312;
export const INVALID_RESPONSE = -320;
export const INVALID_CHUNKED_ENCODING = -321;
export const METHOD_NOT_SUPPORTED = -322;
export const UNEXPECTED_PROXY_AUTH = -323;
export const EMPTY_RESPONSE = -324;
export const RESPONSE_HEADERS_TOO_BIG = -325;
export const PAC_SCRIPT_FAILED = -327;
export const REQUEST_RANGE_NOT_SATISFIABLE = -328;
export const MALFORMED_IDENTITY = -329;
export const CONTENT_DECODING_FAILED = -330;
export const NETWORK_IO_SUSPENDED = -331;
export const SYN_REPLY_NOT_RECEIVED = -332;
export const ENCODING_CONVERSION_FAILED = -333;
export const UNRECOGNIZED_FTP_DIRECTORY_LISTING_FORMAT = -334;
export const NO_SUPPORTED_PROXIES = -336;
export const HTTP2_PROTOCOL_ERROR = -337;
export const INVALID_AUTH_CREDENTIALS = -338;
export const UNSUPPORTED_AUTH_SCHEME = -339;
export const ENCODING_DETECTION_FAILED = -340;
export const MISSING_AUTH_CREDENTIALS = -341;
export const UNEXPECTED_SECURITY_LIBRARY_STATUS = -342;
export const MISCONFIGURED_AUTH_ENVIRONMENT = -343;
export const UNDOCUMENTED_SECURITY_LIBRARY_STATUS = -344;
export const RESPONSE_BODY_TOO_BIG_TO_DRAIN = -345;
export const RESPONSE_HEADERS_MULTIPLE_CONTENT_LENGTH = -346;
export const INCOMPLETE_HTTP2_HEADERS = -347;
export const PAC_NOT_IN_DHCP = -348;
export const RESPONSE_HEADERS_MULTIPLE_CONTENT_DISPOSITION = -349;
export const RESPONSE_HEADERS_MULTIPLE_LOCATION = -350;
export const HTTP2_SERVER_REFUSED_STREAM = -351;
export const HTTP2_PING_FAILED = -352;
export const CONTENT_LENGTH_MISMATCH = -354;
export const INCOMPLETE_CHUNKED_ENCODING = -355;
export const QUIC_PROTOCOL_ERROR = -356;
export const RESPONSE_HEADERS_TRUNCATED = -357;
export const QUIC_HANDSHAKE_FAILED = -358;
export const HTTP2_INADEQUATE_TRANSPORT_SECURITY = -360;
export const HTTP2_FLOW_CONTROL_ERROR = -361;
export const HTTP2_FRAME_SIZE_ERROR = -362;
export const HTTP2_COMPRESSION_ERROR = -363;
export const PROXY_AUTH_REQUESTED_WITH_NO_CONNECTION = -364;
export const HTTP_1_1_REQUIRED = -365;
export const PROXY_HTTP_1_1_REQUIRED = -366;
export const PAC_SCRIPT_TERMINATED = -367;
export const INVALID_HTTP_RESPONSE = -370;
export const CONTENT_DECODING_INIT_FAILED = -371;
export const HTTP2_RST_STREAM_NO_ERROR_RECEIVED = -372;
export const TOO_MANY_RETRIES = -375;
export const HTTP2_STREAM_CLOSED = -376;
export const HTTP_RESPONSE_CODE_FAILURE = -379;
export const QUIC_CERT_ROOT_NOT_KNOWN = -380;
export const QUIC_GOAWAY_REQUEST_CAN_BE_RETRIED = -381;
export const TOO_MANY_ACCEPT_CH_RESTARTS = -382;
export const INCONSISTENT_IP_ADDRESS_SPACE = -383;
export const CACHE_MISS = -400;
export const CACHE_READ_FAILURE = -401;
export const CACHE_WRITE_FAILURE = -402;
export const CACHE_OPERATION_NOT_SUPPORTED = -403;
export const CACHE_OPEN_FAILURE = -404;
export const CACHE_CREATE_FAILURE = -405;
export const CACHE_RACE = -406;
export const CACHE_CHECKSUM_READ_FAILURE = -407;
export const CACHE_CHECKSUM_MISMATCH = -408;
export const CACHE_LOCK_TIMEOUT = -409;
export const CACHE_AUTH_FAILURE_AFTER_READ = -410;
export const CACHE_ENTRY_NOT_SUITABLE = -411;
export const CACHE_DOOM_FAILURE = -412;
export const CACHE_OPEN_OR_CREATE_FAILURE = -413;
export const INSECURE_RESPONSE = -501;
export const NO_PRIVATE_KEY_FOR_CERT = -502;
export const ADD_USER_CERT_FAILED = -503;
export const INVALID_SIGNED_EXCHANGE = -504;
export const INVALID_WEB_BUNDLE = -505;
export const TRUST_TOKEN_OPERATION_FAILED = -506;
export const TRUST_TOKEN_OPERATION_SUCCESS_WITHOUT_SENDING_REQUEST = -507;
export const FTP_FAILED = -601;
export const FTP_SERVICE_UNAVAILABLE = -602;
export const FTP_TRANSFER_ABORTED = -603;
export const FTP_FILE_BUSY = -604;
export const FTP_SYNTAX_ERROR = -605;
export const FTP_COMMAND_NOT_SUPPORTED = -606;
export const FTP_BAD_COMMAND_SEQUENCE = -607;
export const PKCS12_IMPORT_BAD_PASSWORD = -701;
export const PKCS12_IMPORT_FAILED = -702;
export const IMPORT_CA_CERT_NOT_CA = -703;
export const IMPORT_CERT_ALREADY_EXISTS = -704;
export const IMPORT_CA_CERT_FAILED = -705;
export const IMPORT_SERVER_CERT_FAILED = -706;
export const PKCS12_IMPORT_INVALID_MAC = -707;
export const PKCS12_IMPORT_INVALID_FILE = -708;
export const PKCS12_IMPORT_UNSUPPORTED = -709;
export const KEY_GENERATION_FAILED = -710;
export const PRIVATE_KEY_EXPORT_FAILED = -712;
export const SELF_SIGNED_CERT_GENERATION_FAILED = -713;
export const CERT_DATABASE_CHANGED = -714;
export const CERT_VERIFIER_CHANGED = -716;
export const DNS_MALFORMED_RESPONSE = -800;
export const DNS_SERVER_REQUIRES_TCP = -801;
export const DNS_SERVER_FAILED = -802;
export const DNS_TIMED_OUT = -803;
export const DNS_CACHE_MISS = -804;
export const DNS_SEARCH_EMPTY = -805;
export const DNS_SORT_ERROR = -806;
export const DNS_SECURE_RESOLVER_HOSTNAME_RESOLUTION_FAILED = -808;
export const DNS_NAME_HTTPS_ONLY = -809;
export const DNS_REQUEST_CANCELLED = -810;
export const DNS_NO_MATCHING_SUPPORTED_ALPN = -811;
export const DICTIONARY_LOAD_FAILED = -812;