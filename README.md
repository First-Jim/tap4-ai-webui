# Tap4 AI Web UI

Tap4 AI Web UI is the open source AI tools directory build by [Tap4 AI Tools Directory](https://tap4.ai). The project
aims to help everyone build their own AI Tools Directory easily. You can fork the project and deploy to vercel by one
click and update your own ai tools by the dataList in the project.

English | [简体中文](https://github.com/6677-ai/tap4-ai-webui/blob/main/README.zh-CN.md)

## Link Me

You can contact me at Twitter: https://x.com/tap4ai

if this project is helpful to you, buy me a coffee.

<a href="https://www.buymeacoffee.com/tap4ai0o" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

If you are interested with the project, you can scan the qr code and enter the wechat group.
![tap4-ai-wx-group](./public/images/640.jpg)

## Features

- Internationalization
- SEO friendly (with i18n)
- sitemap.xml (dynamic with i18n)
- Ship fast
- NEXT 14 with app route (react server component)
- Supabase serverless database


## Quick Start

### install

- node
- nvm
- pnpm


#### (2) signup a account on supabase then create a project

[https://supabase.com](https://supabase.com)

#### (3) setup env

- root folder, create `.env.local` file and fill with values, for example:

```sh
# your domain
NEXT_PUBLIC_SITE_URL="https://www.tap4.ai"

# google tracking id and adsense URL
GOOGLE_TRACKING_ID="G-XXXXXXX"
GOOGLE_ADSENSE_URL="https://xxxx.googlesyndication.com/xxxxx/xxxxx"

# Footer contact email
CONTACT_US_EMAIL="contact@tap4.ai"

# your supabase database url and key
NEXT_PUBLIC_SUPABASE_URL="https://xxxyyyzzz.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="XXX.YYY.ZZZ"
```

#### (4) runs on dev mode

switch to the particular node version

```sh
nvm use
```

install packages

```sh
pnpm i
```

run on dev mode

```sh
pnpm dev
```

## How to upate your content?

### update "home" or "explore" page (`/` or `/explore`)

```sh
lib/data.ts -> dataList
```

### update detail page (`/ai/website-name`)

- PS: `detail` supports markdown

```sh
lib/data.ts -> detailList
```

### submit website and read it from database

1. runs the website and then go to `/submit` page
2. input the values and then submit the form
3. open and check your supabase project
