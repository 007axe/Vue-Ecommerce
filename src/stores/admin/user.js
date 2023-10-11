import { defineStore } from 'pinia'

export const useAdminUserStore = defineStore('admin-user',  { 
    state: () => ({
        list: [
            {
                fullname: 'Axe',
                role: 'admin',
                status: 'active',
                updateAt: (new Date).toISOString()
            }
        ]
    }),
    actions: {
        getUser (index) {
            return this.list[index]
        },
        updateUser (index, userData) {
            const fields = ['fullname', 'role', 'status']
            for (let field of fields) { //js ใช้ of
                this.list[index][field] = userData[field]
            }
            this.list[index].updateAt = (new Date).toISOString()

            //ท่าด้านบนใช้งานได้แบบด้านล่างแต่เขียนสั้นกว่า
            // this.list[index].fullname = userData.fullname
            // this.list[index].role = userData.role
            // this.list[index].status = userData.status
            // this.list[index].updateAt = userData.updateAt
        },
        removeUser (index) {
            this.list.splice(index, 1)
        }
    }
})