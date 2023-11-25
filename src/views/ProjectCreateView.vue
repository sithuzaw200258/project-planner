<template>
    <div>
        <h2>Create Form</h2>
        <form @submit.prevent="createProject">
            <label>Project Title</label>
            <input type="text" v-model="title">

            <label>Project Detail</label>
            <input type="text" v-model="detail">

            <button>Create Project</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "ProjectCreateView",
        data() {
            return {
                title: "",
                detail: "",
                api: "http://localhost:3000/projects"
            }
        },
        methods: {
            createProject() {
                fetch(this.api,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body:JSON.stringify(
                            {
                                title: this.title,
                                detail: this.detail,
                                complete: false
                            }
                        )
                    }
                )
                .then(()=>{
                    // This is redirect to HomePage
                    this.$router.push("/") // "/" = {name:'home'}
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        },
    }
</script>

<style>
    form {
        background: hsl(0, 0%, 100%);
        padding: 20px;
        border-radius: 10px;
    }

    label {
        display: block;
        color: #bbb;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
        margin: 20px 0 10px 0
    }

    input {
        padding: 10px;
        border: 0;
        border-bottom: 1px solid #ddd;
        width: 100%;
        box-sizing: border-box;
    }

    textarea {
        border: 1px solid #ddd;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        height: 100px;
    }

    form button {
        display: block;
        margin: 20px auto 0;
        background: #00ce89;
        color: white;
        padding: 10px;
        border: 0;
        border-radius: 6px;
        font-size: 16px;
    }

    button{
        cursor: pointer;
    }
</style>