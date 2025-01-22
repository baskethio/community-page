// src/data/mockData.ts
export const mockPosts = [
    {
      id: 1,
      title: 'First Post',
      content: 'This is the content of the first post.',
      comments: [
        {
          id: 1,
          text: 'This is a comment on the first post.',
          replies: [
            {
              id: 1,
              text: 'This is a reply to the first comment.',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the content of the second post.',
      comments: [
        {
          id: 1,
          text: 'First comment on the second post.',
          replies: [],
        },
      ],
    },
  ];
  