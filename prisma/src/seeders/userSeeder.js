import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany() // Limpa a tabela User
  await prisma.user.createMany({
    data: [
      { name: 'Alice', email: 'alice@example.com', password: '123456' },
      { name: 'Bob', email: 'bob@example.com', password: 'abcdef' },
    ],
    skipDuplicates: true,
  })
  console.log('Usuários inseridos!')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect()) 