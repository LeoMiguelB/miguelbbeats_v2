
import '@uiw/react-markdown-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { createClient } from '../../../utils/supabase/client';
import { redirect } from 'next/navigation';
import Form from './_components/Form';


const Page = async () => {

  // this is a private page, protect it...
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  console.log(data);

  if(error || !data?.user) {
    redirect('/login');
  }

  return (
    <>
      <Form />
    </>
  )
}

export default Page;