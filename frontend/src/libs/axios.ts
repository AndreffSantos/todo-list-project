import axios, {AxiosRequestConfig} from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

interface Login {
  email: string,
  password: string
}

export const login = (user: Login) => (
  api.post('/login', user).then(response => response.data)
);

export const getTasks = (token: string) => (
  api.get("/tasks", { "Authorization": token } as AxiosRequestConfig)
    .then(response => response.data.tasks)
);

export const addTask = (task: string, token: string) => {
  const data = { token, task }
  api.post('/tasks', data).then(response => response.data)
};
