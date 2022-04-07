<template>
    <div>
        <h3>This is Side Bar</h3>
        <ul>
            <li v-for="menu in menus">
                <nuxt-link :to="{name: `${menu.name}`, params: {category: `${menu.category}`, subcategory: `${menu.subcategory}`, id: `${menu.id}`}}" >{{ menu.title}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./SideBar.ts"></script>
