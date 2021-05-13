/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 20:43:40
 * @LastEditTime: 2021-05-13 10:52:24
 * @LastEditors: rzx007
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\mysql\db.js
 */
let article =
    `create table if not exists  article (
        content longtext CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '文章内容',
        create_time datetime DEFAULT NULL COMMENT '创建时间',
        id varchar(255) NOT NULL COMMENT '文章id',
        title varchar(255) DEFAULT NULL,
        invisible varchar(11) DEFAULT NULL,
        tags varchar(255) DEFAULT NULL COMMENT '标签',
        detail longtext COMMENT '文章内容',
        update_time datetime DEFAULT NULL,
        url varchar(255) DEFAULT NULL COMMENT '文章url',
        author varchar(255) DEFAULT NULL COMMENT '作者',
        comments longtext DEFAULT NULL COMMENT '评论',
        pv int DEFAULT NULL COMMENT '浏览次数',
        PRIMARY KEY ( id )
    ) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;`

let classify =
    `create table if not exists  classify (
        id int NOT NULL,
        type varchar(255) DEFAULT NULL,
        num int DEFAULT NULL,
        PRIMARY KEY (id)
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8;`

let tags =
    `create table if not exists  tags (
        id varchar(255) DEFAULT NULL,
        title varchar(255) DEFAULT NULL,
        time time DEFAULT NULL,
        type varchar(255) DEFAULT NULL
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8;`

let user =
    `create table if not exists  user (
        id varchar(255) NOT NULL COMMENT '用户id',
        username varchar(18) DEFAULT NULL,
        password varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
        phone varchar(11) DEFAULT NULL,
        create_time datetime DEFAULT NULL,
        update_time datetime DEFAULT NULL,
        avator_url varchar(255) DEFAULT NULL,
        PRIMARY KEY (id)
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8;`
let comment =
    `create table if not exists comment(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     content TEXT(0) NOT NULL COMMENT '评论内容',
     moment VARCHAR(40) NOT NULL,
     postid VARCHAR(40) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`
module.exports = { article, classify, tags, user, comment }

