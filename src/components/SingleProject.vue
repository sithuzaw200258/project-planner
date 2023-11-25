<template>
    <div class="project" :class="{ complete: project.complete }">
        <div class="d-flex">
            <h3 class="project-title" @click.self="showDetail = !showDetail">
                {{ project.title }}
            </h3>
            <div class="project-icons">
                <span class="material-icons" @click="deleteProject">
                    delete
                </span>

                <router-link :to="{name:'edit',params:{id:project.id}}">
                    <span class="material-icons">
                        edit
                    </span>
                </router-link>

                <span class="material-icons" @click="completeProject">
                    done
                </span>
            </div>
        </div>
        <div v-if="showDetail">
            <p class="project-detail">{{ project.detail }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleProject",
    props: ['project'],
    data() {
        return {
            showDetail: false,
            api: "http://localhost:3000/projects/"
        }
    },
    methods: {
        deleteProject() {
            let deleteRoute = this.api + this.project.id;
            fetch(deleteRoute, { method: "DELETE" })
                .then(() => {
                    this.$emit("delete", this.project.id)
                })
                .catch(err => {
                    console.log(err);
                })
        },
        completeProject() {
            let completeRoute = this.api + this.project.id;
            fetch(completeRoute,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            complete: !this.project.complete
                        }
                    )
                }
            )
                .then(() => {
                    this.$emit("complete", this.project.id)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
}
</script>

<style scoped>

a{
    all: unset;
}
.project {
    background-color: #f2f2f2;
    padding: 20px;
    margin: 10px;
    border-left: 6px solid #dc143c;
    border-radius: 8px;
}

.project-title {
    cursor: pointer;
    color: #4b0082;
}

.d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.project-icons span {
    cursor: pointer;
    margin-left: 10px;
}

.project-icons span:hover {
    color: #777;
}

.complete {
    border-left-color: rgb(3, 172, 68);
}
</style>