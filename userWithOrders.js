const userWithOrders = await prisma.user.findUnique({
  where: { id: 1 },
  include: { orders: true },
});
