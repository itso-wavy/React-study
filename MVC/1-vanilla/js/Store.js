import { TabType } from './views/TabView.js';
import { createNextId } from './helpers.js';

const tag = '[Store]';

export default class Store {
  constructor(storage) {
    console.log(tag, 'constructor');

    /* 데이터 관리 */
    if (!storage) throw 'no storage';
    this.storage = storage;

    /* 상태 관리 */
    this.searchKeyword = ''; // 검색을 했는지 하지 않았는지
    this.searchResult = []; // 검색어 히스토리가 있는지 없는지
    this.selectedTab = TabType.KEYWORD; // 어떤 tab을 선택했는지
  }

  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter(product =>
      product.name.includes(keyword)
    );
    this.addHistory(keyword);
  }

  getKeywordList() {
    return this.storage.keywordData;
  }

  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }

  _sortHistory(history1, history2) {
    return history2.date > history1.date;
  }

  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
      history => history.keyword !== keyword
    );
  }

  addHistory(keyword = '') {
    keyword = keyword.trim();
    if (!keyword) {
      return;
    }

    const hasHistory = this.storage.historyData.some(
      history => history.keyword === keyword
    );
    if (hasHistory) this.removeHistory(keyword);

    const id = createNextId(this.storage.historyData);
    const date = new Date();
    this.storage.historyData.push({ id, keyword, date });
    this.storage.historyData = this.storage.historyData.sort(this._sortHistory);
  }
}
