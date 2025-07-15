# modules (Layers)

```

app (global|mediator): shared module (layer)
├── server/utils/
├── server/repos/
├── server/services/
├── shared/(utils, types)

auth/
├── server/repos/
├── server/services/
├── shared/(utils, types)

ecommerce/
├── server/repos/
├── server/services/
├── shared/(utils, types)

-----------
api/orders/[userId]

- getUser: auth
- getUserOrders: ecommerce

problems of:
- observers (event => listener): dev experience
- internal http calls: useless shape of response logic

pros of mediator:
- auto-complete
- decoupled
- less memory usage
- knows where modules talks to each others

```
