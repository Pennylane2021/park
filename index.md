---
layout: default
title: "홈"
---

# 안녕하세요! MR E의 홈페이지입니다.

취미와 기록을 모아놓은 공간이에요.

- [About Me](about)

## 최근 글
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})
  </li>
{% endfor %}
</ul>
