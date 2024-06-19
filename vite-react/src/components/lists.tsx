type User = {
  name: string;
  email: string;
}

const users:User[] = [
  { name: "sandro", email: "sandro@per.sempre" },
  { name: "gianni", email: "gianni@per.forza" },
]

function Lists() {
  return (
    <ul>
      {users.map((user:User) => 
        <li>{user.name}, {user.email}</li>
      )}
    </ul>
  )
}

export default Lists
