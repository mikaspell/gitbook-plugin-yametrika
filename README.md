# Yandex Metrika tracker

This is a best tracker from Russia! Enjoy it!

### Install

``` 
$ npm install gitbook-plugin-yametrika
```

#### How to use it?

Create your tracker in [Ya.Metrika](http://metrika.yandex.ru).

Next you can use it for your book with in the book.json:

``` json
{
    "plugins": ["yametrika"]
}
```

You can set the Yandex Metrika tracking ID using the plugins configuration in the book.json:

``` json
{
    "plugins": ["yametrika"],
    "pluginsConfig": {
        "yametrika": {
            "number": "xxxxxxx"
        }
    }
}
```

#### NOTICE

default track options:

- Webvisor (Вебвизор) - **true**
- Clickmap (Карта кликов) - **true**
- TrackLinks (Внешние ссылки, загрузки файлов и отчёт по кнопке «Поделиться») - **true**
- AccurateTrackBounce (Точный показатель отказов) - **true**
- Informer (Информер) - **false**
- Ut (Запрет на индексацию страниц) - **false**
- Async (Асинхронный код) - **true**
- TrackHash (Отслеживание хеша в адресной строке) - **false**
- XML (Для xml сайтов) - **false**
- Params example - **false**
- OneRow (Счетчик в одну строку) - **true**

#### TO DO

Include choose the *default* options in book.son.