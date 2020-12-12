export default {
    state: {
        appName: "Morrow",  // 应用名称
        themeColor: "#4b5f6e",  // 主题颜色
        oldThemeColor: "#4b5f6e",   // 上一次主题颜色
        collapse:false  // 导航栏收缩状态
    },
    getters: {
        collapse(state){// 对应着上面state
            return collapse;
        }
    },
    mutations: {
        onCollapse(state){  // 改变收缩状态
            state.collapse = !state.collapse;
        },
        themeColor(state, themeColor){  // 改变收缩状态
            state.themeColor = themeColor;
        },
        oldThemeColor(state, oldThemeColor){  // 改变收缩状态
            state.oldThemeColor = oldThemeColor;
        }
    },
    actions: {
        // 改变主题颜色
        onThemeChange ({ commit, state }, data) {
            commit('themeColor', data.themeColor)
            commit('oldThemeColor', data.oldThemeColor)
        }
    }
}
