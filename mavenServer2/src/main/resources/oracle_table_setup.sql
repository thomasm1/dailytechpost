CREATE TABLE post(id NUMBER(10), did VARCHAR2(20), date_ VARCHAR2(20) , author VARCHAR2(20) , month_order VARCHAR2(20), cat3 VARCHAR2(20), title VARCHAR2(20), post VARCHAR2(2000), blogcite VARCHAR2(200), username  VARCHAR2(20));
DROP TABLE POST;
COMMIT;
SELECT * FROM POST;
insert into post(id, did, date_, author, month_order, cat3, title, post, blogcite, username)
values(1001,'did1xxxx','date_1', 'authorxxxxxxx','monthOrder1','cat3', 'title1', 'post1', 'blogcite1', 'username1');

insert into post(id, did, date_, author, month_order, cat3, title, post, blogcite, username)
values(1002,'did2','date_2', 'author','monthOrder2','cat23', 'title2', 'post2', 'blogcite2', 'username2');

insert into post(id, did, date_, author, month_order, cat3, title, post, blogcite, username)
values(1003,'did3','date_3', 'author3','monthOrder3','cat33', 'title3', 'post3', 'blogcite3', 'username3');