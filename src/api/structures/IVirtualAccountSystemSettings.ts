export namespace IVirtualAccountSystemSettings {
  /**
   * 시스템 설정 삭제 API의 결과 반환 객체입니다.
   *
   * Try-catch 및 에러 핸들링까지 포괄하며, 삭제 성공/실패 케이스에 대한 상태 메시지를 제공합니다.
   */
  export type IDeleteResult = {
    /**
     * 삭제 결과나 상태를 메시지로 반환합니다.
     *
     * 삭제 성공 시 'success', 실패/존재하지 않을 경우 관련 에러 메시지 표현.
     */
    result: string;
  };
}
