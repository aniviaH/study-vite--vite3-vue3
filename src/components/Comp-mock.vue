<script lang="jsx">
import { defineComponent } from "vue";

/**
 * https://www.npmjs.com/package/vite-plugin-mock
 * https://github.com/vbenjs/vite-plugin-mock
 * 1.安装依赖vite-plugin-mock（A mock plugin for vite, developed based on mockjs.）
 * yarn add mockjs -S
 * yarn add vite-plugin-mock -D
 * 
 * 2.引入插件
 * vite.config.js中配置
 * import {viteMockServe} from 'vite-plugin-mock'
 * viteMockServe ({
      // default
      mockPath: 'mock',
      supportTs: false,
    })
    
    3.调用api，并获取数据
    使用fetch获取mock数据 -- function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>
 */

export default defineComponent({
  setup() {
    const onCreateUser = () => {
      // fetch post
      fetch("/api/createUser", {
        method: 'post',
        body: {},
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      }).then(res => {
        console.log('res---', res);
        return res.json()
      }).then(data => {
        console.log('data---',data);
      }).catch(err => {
        console.log('err---', err);
      })
    };

    const onGetUsers = async () => {
      // fetch get
      // fetch("/api/getUsers")
      //   .then(res => {
      //     console.log('res---', res);
      //     return res.json()
      //   })
      //   .then((data) => {
      //     console.log("data---", data);
      //   })
      //   .catch((err) => {
      //     console.log("err---", err);
      //   });

      const res = await fetch('/api/getUsers')
      console.log('res--', res);
      const data = await res.json()
      console.log('data---', data);
    }

    return () => (
      <div>
        <button onClick={onCreateUser}>mock-createUser</button>
        <button onClick={onGetUsers}>mock-getUsers</button>
      </div>
    );
  },
});
</script>
