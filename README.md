<div align="center">
  <h2 align="center">1101-DBMS-Final: 實聯制登記系統</h2>
  <p align="center"> 我不想寫SQL </p>
</div>
<br />

# 組員

- 106703043 資科四 林琖崴
- 107703004 資科四 李元亨
- 107703006 資科四 楊永靖
- 108703009 資科三 陳威愷
- 108703029 資科三 江宗樺
- 108703031 資科三 李宇晴 
- 108703052 資科三 劉鎮宇


# 主題說明
自COVID-19在全球爆發以來，在地小人稠的台灣，對於確診者的足跡的調查變的更加重要。
因此我們做出了一款簡單的實聯登記系統，可用來進行基本的實聯系統建置。

# 資料需求分析
因為我們分成三種登記方式：手機、場所、實聯登記

所以需要的資料有：

(1) 手機登記：手機號碼、身分證號碼、姓名

(2) 場所登記：場所id、地址

(3) 實聯登記：手機號碼、場所id、時間

# 系統功能分析
## 身份證註冊
姓名(name), 身份證字號(people_id)，用來註冊身份。
## 手機註冊
身分證(people_id), 手機(phoneNum)，用來註冊手機（一人可以擁有多隻手機）。
## 場所登記
場所名稱(name), 地址(address), 手機(phone_number)，用來註冊地點（同一隻手機可以註冊多個場所）
## 實聯登記
使用場所代碼(place_id)、手機號碼(phone_number)來登記每個人出入場所的紀錄。
## 疫調查詢
姓名(name)、身份證字號(people_id)，用來註冊身份。
## 店家查詢
身分證(people_id),手機(phoneNum)，用來註冊手機（一人可以擁有多隻手機）。

## QR查詢
身分證(people_id),手機(phoneNum)，用來註冊手機（一人可以擁有多隻手機）。

# 心得
