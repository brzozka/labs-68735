import createBridge from '../lib/createBridge';

const todoSchema = {
  title: 'Todo',
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 3 },
    isCompleted: { type: 'boolean' },
    description: { type: 'string' },
    assignedUser: {
      type: 'string',
      enum: ['Barti', 'Robi', 'Kaz', 'Belmondo'],
    },
  },
  required: ['title'],
};

export const bridge = createBridge(todoSchema);