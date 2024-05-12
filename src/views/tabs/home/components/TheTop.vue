<script setup lang="ts">
import { ref } from 'vue'
import type { ISearchRecommend } from '@/types'
import OpSearch from '@/components/OpSearch.vue'

interface IProps {
  recommends: ISearchRecommend[]
}

defineProps<IProps>()

const searchValue = ref('')

const onSearch = (value?: string | number) => {
  console.log('onSearch', value)
}

const onCancel = () => {
  console.log('onCancel')
}

const onClear = () => {
  console.log('onClear')
}
</script>

<template>
  <div class="the-top">
    <div class="top">
      <img src="@/assets/imgs/index_page/location.png" alt="" class="location-icon" />
      <div class="location">幸福小区(北一区东南门)</div>
      <img src="@/assets/imgs/index_page/shopcart.png" alt="" class="shopcart-icon" />
      <img src="@/assets/imgs/index_page/comments.png" alt="" class="comments-icon" />
    </div>

    <op-search
      v-model="searchValue"
      shape="round"
      placeholder="世界茶饮 35减2"
      background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
      @search="onSearch"
      @cancel="onCancel"
      @clear="onClear"
    >
      <template #right-icon>
        <div>搜索</div>
      </template>
    </op-search>

    <div class="search-recommend">
      <div v-for="recommend in recommends" :key="recommend.value" class="tag">
        {{ recommend.label }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.the-top {
  background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
  color: white;

  .top {
    display: flex;
    align-items: center;
    padding: 10px 10px 0 10px;
    line-height: 15px;
    font-size: 15px;
    font-weight: bold;

    .location-icon {
      width: 20px;
      height: 20px;
    }
    .location {
      flex: 1;
    }
    .shopcart-icon {
      width: 24px;
      height: 24px;
    }
    .comments-icon {
      width: 28px;
      height: 24px;
      margin-left: 10px;
    }
  }

  ::v-deep(.van-field__right-icon) {
    margin-right: 0;
  }

  .search-recommend {
    display: flex;
    padding: 0 10px 8px;

    .tag {
      font-size: 12px;
      border-radius: 10px;
      background: rgb(242, 242, 242, 0.3);
      padding: 2px 8px;
      margin-right: 10px;
    }
  }
}
</style>
