<template>
    <div>
        <h2>Edit Form</h2>
        <form>
            <label>Project Title</label>
            <input type="text" v-model="title">

            <label>Project Detail</label>
            <input type="text" v-model="detail">

            <button @click.prevent="updateProject">Update Project</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "ProjectEditView",
    props: ['id'],
    data() {
        return {
            title: "",
            detail: "",
            api: "http://localhost:3000/projects/"
        }
    },
    methods: {
        updateProject() {
            let updateRoute = this.api + this.id;
            fetch(updateRoute,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            title: this.title,
                            detail: this.detail
                        }
                    )
                }
            )
            .then(()=>{
                this.$router.push("/");
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    mounted() {
        let editRoute = this.api + this.id;
        fetch(editRoute)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.title = data.title;
            this.detail = data.detail;
        })
        .catch(err => {
            console.log(err);
        })

    },
}
</script>

<style></style>