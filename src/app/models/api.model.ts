const userId = localStorage.getItem('user');
const api = localStorage.getItem('api');
const url = localStorage.getItem('url');

export const config = {
  conf: `${url}/web/config.json`,
  info: `${url}/System/Info/Public`,
  quickConnect: `${url}/QuickConnect/Status`,
};
export const usersApi = {
  publicUserList: `${url}/users/public`,
  userAuth: `${url}/Users/authenticatebyname`,
  allUsers: `${url}/users?api_key=${api}`,
  views: `${url}/Users/${userId}/Views?api=${api}`,
  folder: `${url}/Users/${userId}/Items`,
};

/**
 * http://192.168.31.103:8097/Users/d5874e34875847a8bd20ac465ecc9bdd/Items
 * ?SortBy=SortName%2CProductionYear
 * &SortOrder=Ascending
 * &IncludeItemTypes=Movie
 * &Recursive=true
 * &Fields=PrimaryImageAspectRatio%2CMediaSourceCount%2CBasicSyncInfo
 * &ImageTypeLimit=1
 * &EnableImageTypes=Primary%2CBackdrop%2CBanner%2CThumb
 * &StartIndex=0
 * &ParentId=36b7cb06a8877931044683388b8dcc1f
 * &Limit=100
 */
