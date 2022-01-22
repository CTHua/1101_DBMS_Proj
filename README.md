---
marp: true
title: 1101-DBMS-Final-Presentation
date: 2022-01-21
paginate: true
---

# 1101-DBMS-Final

## Presentation

---

# 主題

## 實聯制登記系統

---

# 組員

| 學號      | 系級   | 姓名   | 任務分工                                               | 貢獻百分比 |
| --------- | ------ | ------ | ------------------------------------------------------ | ---------- |
| 106703043 | 資科四 | 林琖崴 | QRcode                                                 | 10%        |
| 107703004 | 資科四 | 李元亨 | Home、店家註冊                                         | 10%        |
| 107703006 | 資科四 | 楊永靖 | 足跡查詢（疫調查詢）                                   | 10%        |
| 108703009 | 資科三 | 陳威愷 | 實聯登記                                               | 10%        |
| 108703029 | 資科三 | 江宗樺 | 組長、後端 RESTful API、<br>資料庫設計、統籌、整體設計 | 40%        |
| 108703031 | 資科三 | 李宇晴 | 店家查詢                                               | 10%        |
| 108703052 | 資科三 | 劉鎮宇 | 身份證註冊、手機註冊                                   | 10%        |

---

# 主題說明

自 COVID-19 在全球爆發以來，在地小人稠的台灣，對於確診者的足跡的調查變的更加重要。
因此我們做出了一款簡單的實聯登記系統，可用來進行基本的實聯系統建置。

---

# 資料需求分析

因為我們分成三種登記方式：手機、場所、實聯登記

所以需要的資料有：

(1) 手機登記：手機號碼、身分證號碼、姓名

(2) 場所登記：場所 id、地址

(3) 實聯登記：手機號碼、場所 id、時間

---

# 系統功能分析

## 身份證註冊

姓名(name), 身份證字號(people_id)，用來註冊身份。

## 手機註冊

身分證(people_id), 手機(phoneNum)，用來註冊手機（一人可以擁有多隻手機）。

## 場所登記

場所名稱(name), 地址(address), 手機(phone_number)，用來註冊地點（同一隻手機可以註冊多個場所）

---

# 系統功能分析

## 實聯登記

使用場所代碼(place_id)、手機號碼(phone_number)來登記每個人出入場所的紀錄。

## 疫調查詢

身份證字號(people_id)，用來查詢疫調。

## 店家查詢

手機(phoneNum)，用來查詢已登記的場所。

## QR 查詢

---

# 使用語言

---

# 心得
江宗樺：
這次專案結合時事，我們成功做出了
陳威愷：
這次的專案結合了疫情時事，我們初步做出了簡單了實聯制系統。雖然離實際的系統可能還有點區別，但我在過程中學習到了許多。像是接觸了 HTML、JSReact 以及將前端與後端連結。很感謝在過程中不斷 Carry 的組員，在他們身上學到許多。

劉鎮宇：經過這次的期末專題，對於後端和前端有新的認識，也學到了處理專案的方式，對於自己的能力有大幅提升。

---

李宇晴：參與了這次專案後，才深知自己能力到底有多不足，跟著課堂教學的內容是遠遠不夠的，這次學習到前後端實際運作方式，是以前沒有接觸過的領域，總的來說學到很多，也很感謝組員的不懈幫忙，讓我也能共享最後報告完成的甜美果實。

楊永靖：
在專題中我主要是負責了前端的部分，有別以往用純 html 搭配 js 和 css，這次是我第一次使用 react 和 mui 等框架來撰寫，也學到如何更有效率的製作前端。

李元亨：
在這次專題中，是我第一次接觸到網頁製作，除了前端的新知識外。在實作過程中也對於設計系統架構和團隊開發流程有了更深入的體會，獲益良多。

林琖崴：
有別於以往的專題大多都是負責後端的部分，這次是我第一次接觸前端，組長很耐心的引導我們分工跟入門，讓我學習到了不少關於前端的知識，也很感謝組員們的 carry 與積極。
