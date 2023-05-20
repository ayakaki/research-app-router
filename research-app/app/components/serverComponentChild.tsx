import { fetchData } from '@/app/repositories/fetchData';
import { ClientComponent } from './clientComponent';
import { ApiType } from '@/app/models/apiType';

type Props = {
  text: string;
};

export const ServerComponentChild = async (props: Props) => {
  return (
    <>
      <h2>ServerComponent_Child</h2>
      <p>親から受け取ったtext: {props.text}</p>
    </>
  );
};
