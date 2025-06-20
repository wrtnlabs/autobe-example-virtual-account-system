/**
 * 업무 API 조작 결과(성공/실패, 메시지 등)를 표준적으로 반환하는 오브젝트 타입입니다.
 *
 * CRUD, 정책적 DELETE 등에서 성공 여부와 부가 설명을 한 번에 전달할 때 사용합니다.
 *
 * @autobe Generated by AutoBE - https://github.com/wrtnlabs/autobe
 */
export type IOperationResult = {
  /** 조작(생성/수정/삭제 등) 성공 여부. API 응답 처리의 표준적 성공/실패 플래그입니다. */
  success: boolean;

  /**
   * 성공 또는 오류 코멘트.
   *
   * 응답 메시지는 사용자의 작업 결과(정상 처리, 인증 오류, 유효성 실패 등)를 명확히 안내하며, 화면에 바로 표출 가능합니다.
   */
  message?: string;
};
