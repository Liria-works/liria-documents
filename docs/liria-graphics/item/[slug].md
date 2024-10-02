---
---

<script setup>
import { useData } from 'vitepress'

const { params } = useData()

const description = params.value.data.description
const contents = params.value.data.contents
const details = params.value.data.details
const packages = params.value.data.packages
const usage = params.value.data.usage
</script>

# {{ $params.title }}

<p class="py-2 whitespace-pre-wrap">{{ description }}</p>

<Badge type="info" text="デザイン" /> ＊Melufell＊(@melufell_Iroha)

## 内容

<li v-for="i in contents">
    {{ i.name }}
    <Badge v-if="i.type" type="info" :text="i.type" />
</li>

## データの詳細

<div v-for="detail in details">
    <div v-if="detail.fieldId === 'modelDetails'">
        ポリゴン数 {{ detail.tris }}
        マテリアル数 {{ detail.materials }}
        テクスチャ数 {{ detail.textures }}
        ボーン数 {{ detail.bones }}
        シェイプキー {{ detail.shapekeys }}
        {{ detail.notes }}
    </div>
</div>

## 利用パッケージ

{{ packages }}

## 利用方法

{{ usage }}
