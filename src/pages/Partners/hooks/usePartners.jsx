import { useGetAllPartners } from "../../../services/Partners/services";

export default function usePartners(){
    const {data: partnerData, isLoading} = useGetAllPartners();

    return {
        partnerData,
        isLoading
    }
}