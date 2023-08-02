import { FC } from 'react';

import { IPost } from '../../types';

type PropsType = {
  post: IPost;
};

export const Post: FC<PropsType> = ({ post }) => {
  return (
    <tr>
      <th className="font-normal md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {post.id}
      </th>
      <td className="font-normal w-1/3 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {post.title}
      </td>
      <td className="font-normal w-1/3 md:font-medium p-2 md:p-4 border border-grayExtraLite">
        {post.body}
      </td>
    </tr>
  );
};
