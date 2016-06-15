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
            "number": 1111111
        }
    }
}
```

You can customize the tracker object by passing additional configuration options.

``` json
{
    "plugins": ["yametrika"],
    "pluginsConfig": {
        "yametrika": {
            "number": 11111111,
            "settings": {
                "webvisor": true,
                "clickmap": true,
                "trackLinks": true,
                "accurateTrackBounce": true,
                "trackHash": true,
                "ut": "noindex"
            }
        }
    }
}
```

When using GitBook 3, the whole configuration settings should be set directly in the `"yametrika"` property, using the default configuration for the API:
``` json
{
    "plugins": ["yametrika"],
    "pluginsConfig": {
        "yametrika": {
            "id": 11111111,
            "webvisor": true,
            "clickmap": true,
            "trackLinks": true,
            "accurateTrackBounce": true,
            "trackHash": true,
            "ut": "noindex"
        }
    }
}
```

Available for customize options:
- Webvisor (Вебвизор)
- Clickmap (Карта кликов)
- TrackLinks (Внешние ссылки, загрузки файлов и отчёт по кнопке «Поделиться»)
- AccurateTrackBounce (Точный показатель отказов)
- TrackHash (Отслеживание хеша в адресной строке)
- Ut (Запрет на индексацию страниц)

> ##### To use the option, you must specify it in the object "settings" with the status "true", if you do not want to use - just do not specify the object "settings"

#### NOTICE

default track options status:

- Webvisor (Вебвизор) - **false** (!new)
- Clickmap (Карта кликов) - **false** (!new)
- TrackLinks (Внешние ссылки, загрузки файлов и отчёт по кнопке «Поделиться») - **false** (!new)
- AccurateTrackBounce (Точный показатель отказов) - **false**  (!new)
- Informer (Информер) - **false**
- Ut (Запрет на индексацию страниц) - **false**
- Async (Асинхронный код) - **true**
- TrackHash (Отслеживание хеша в адресной строке) - **false**
- XML (Для xml сайтов) - **false**
- Params example - **false**
- OneRow (Счетчик в одну строку) - **true**

#### TO DO

Include choose the *Informer*, *Async*, *XML*, *Params example*, *OneRow* options in book.json.
