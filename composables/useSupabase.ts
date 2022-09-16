
import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6bndxcnBzcHJlZGpoa3B2aGdvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MzM1Mjc5MCwiZXhwIjoxOTc4OTI4NzkwfQ.g9jIqTsD8pRPdKIqJcpII8uykSCE8KQWuNPb2IsDbCQ"
const SUPABASE_URL = "https://rznwqrpspredjhkpvhgo.supabase.co"
const useSupabase = () => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    return {
        supabase
    }
}

export default useSupabase;
