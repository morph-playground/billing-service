import { createApp } from './app';

const PORT = process.env.PORT || 3000;
const app = createApp();
app.listen(PORT, () => {
  (`Server is running on port ${PORT}`);
});